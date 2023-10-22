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
import { useStateValue } from '../../../ContextProvider/StateContext';
import { Link } from "react-router-dom";

export default function data(Ambulances) {
  const [{Hospitals},dispatch]=useStateValue();
 
  function add_Ambulances(data){
    dispatch({
      type:'ADD_AMBULANCES',
      Ambulances_data:data
    })
  }
  function add_book_ambulance(data){
    dispatch({
      type:'ADD_BOOKAMBULANCE',
      Book_data:data
    })
  }
  useEffect(()=>{
    async function getAllAmbulance(){
      try{
        const ambulance_data= await axios.get('http://127.0.0.1:8000/ambulance/');
        add_Ambulances(ambulance_data.data);
      }catch(error){
        console.log(error);
      }
    }
    getAllAmbulance();
  },[]);

  async function getAmbulancesBook(id){
    try{
      const book_data= await axios.get(`http://127.0.0.1:8000/bookambulance/${id}`);
      add_book_ambulance(book_data.data)
    }catch(error){
      console.log(error);
    }
  }

  const Author = ({ image, name, email,id }) => (
    <div onClick={()=>getAmbulancesBook(id)}>
      <Link to="/ambulancepage/">
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

  const rows=Ambulances.map((a,i)=>{
    const starsArray = new Array(a.ambulance_rating).fill("*");
    const rating = starsArray.join("");
    let ratingString = "";
    
    if (a.ambulance_rating === 1 || a.ambulance_rating === 2) {
      ratingString = "good";
    } else if (a.ambulance_rating === 3 || a.ambulance_rating === 4) {
      ratingString = "very good";
    } else if (a.ambulance_rating === 5) {
      ratingString = "excellent";
    } else {
      ratingString = "invalid rating";
    }

    return(
      {
        id:i,
        author: <Author image={team2} name={a.ambulance_type} email={a.ambulance_time} id={a.id}  />,
        function: <Job title={rating} description={ratingString} />,
        status: (
          // <MDBox>
          //   <MDBadge badgeContent={a.ambulance_price} color="success" variant="gradient" />
          // </MDBox>
            <MDBox lineHeight={1} textAlign="left">
            <MDTypography display="block" variant="caption" color="success" fontWeight="medium">
            {a.ambulance_price}
            </MDTypography>
          </MDBox>
        ),
      }
    )
  })

  return {
    columns: [
      { Header: "ambulances", accessor: "author", width: "45%", align: "left" },
      { Header: "Rating", accessor: "function", align: "left" },
      { Header: "Price", accessor: "status", align: "center" },
    ],
    rows:rows,
  };
}
