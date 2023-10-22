/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";

// Images
import team2 from "assets/images/hospital.jpeg";
import axios from "axios";
import { useEffect} from "react";
import { Link } from "react-router-dom";
import { useStateValue } from '../../../ContextProvider/StateContext';

export default function data() {
  const [{Hospitals,HospitalAmbulances},dispatch]=useStateValue();
 
  function add_hospital(data){
    dispatch({
      type:'ADD_HOSPITALS',
      Hospitals_data:data
    })
  }
  function add_hospitalAmbulances(data){
    dispatch({
      type:'ADD_HOSPITALAMBULANCES',
      HospitalAmbulances_data:data
    })
  }
  function add_hospitalName(data){
    dispatch({
      type:'ADD_HOSPITALNAME',
      HospitalName_data:data
    })
  }

  useEffect(()=>{
    async function getAllHospital(){
      try{
        const hospitals_data= await axios.get('http://127.0.0.1:8000/hospital/');
        add_hospital(hospitals_data.data)
      }catch(error){
        console.log(error);
      }
    }
    getAllHospital();
  },[]);


  async function getHospitalAmbulances(id,name){
    try{
      const hospitalambulances_data= await axios.get(`http://127.0.0.1:8000/hospitalambulances/${id}`);
      add_hospitalAmbulances(hospitalambulances_data.data);
      add_hospitalName(name);
    }catch(error){
      console.log(error);
    }
  }

  const Author = ({ image, name, email,id }) => (
    <div onClick={()=>getHospitalAmbulances(id,name)}>
      <Link to="/hospitalambulances">
        <MDBox display="flex" alignItems="center" lineHeight={1}>
          <MDAvatar src={image} name={name} size="sm" />
          <MDBox ml={2} lineHeight={1}>
            <MDTypography display="block" variant="button" fontWeight="medium">
              {name}
            </MDTypography>
            <MDTypography variant="caption">{email}</MDTypography>
          </MDBox>
        </MDBox>
      </Link>
    </div>
  );

  const Job = ({ title, description }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {title}
      </MDTypography>
      <MDTypography variant="caption">{description}</MDTypography>
    </MDBox>
  );

  const rows=Hospitals?.map((h,i)=>{
    const starsArray = new Array(h.hospital_rating).fill("*");
    const rating = starsArray.join("");
    let ratingString = "";
    
    if (h.hospital_rating === 1 || h.hospital_rating === 2) {
      ratingString = "good";
    } else if (h.hospital_rating === 3 || h.hospital_rating === 4) {
      ratingString = "very good";
    } else if (h.hospital_rating === 5) {
      ratingString = "excellent";
    } else {
      ratingString = "invalid rating";
    }

  return(
      {
        id:i,
        author: <Author image={team2} name={h.hospital_name} email={h.hospital_city} id={h.id} />,
        function: <Job title={rating} description={ratingString} />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent={h.hospital_distance} color="success" variant="gradient" size="sm" />
          </MDBox>
        )
      }
    )
  })

  return {
    columns: [
      { Header: "Hospitals", accessor: "author", width: "45%", align: "left" },
      { Header: "Rating", accessor: "function", align: "left" },
      { Header: "Distance", accessor: "status", align: "center" },
    ],
    rows:rows,
  };
}