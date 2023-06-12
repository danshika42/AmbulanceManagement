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
import React, { useRef } from 'react';

// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Footer from "examples/Footer";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import Card from "@mui/material/Card";


function Notifications({Hospitals}) {
  const formRef = useRef(null);


  function handleSubmit(event) {
    event.preventDefault(); // Prevents the default form submission behavior
    const data = new FormData(event.target); // Gets the data from the form inputs
    fetch('http://127.0.0.1:8000/createambulance/', {
      method: 'POST', // Specifies the HTTP method to use
      body: data // Includes the data in the request body
    })
    .then(response => {
      console.log(data);
      console.log(response);
    })
    .catch(error => {
      console.log(error);  
      console.log("not done");  
    });
    formRef.current.reset();
  }
  const hospital_list=Hospitals.map((h)=>{
    return {"h_name":h.hospital_name,"h_id":h.id}
  })
  console.log(hospital_list);
  

  return (
    <DashboardLayout>
       <MDBox mt={6} mb={3}>
          <Grid container spacing={3} justifyContent="center">
          <Card>
          <MDBox pt={4} pb={3} px={3}>
            <MDBox ref={formRef} component="form" role="form" method="post" onSubmit={handleSubmit}>
              <MDBox mb={2}>
                <MDInput type="text" id="ambulance_time" name="ambulance_time" label="Ambulance Time"  fullWidth />
              </MDBox>
              <MDBox mb={2}>
                <MDInput type="text" id="ambulance_type" name="ambulance_type" label="Ambulance Type" fullWidth />
              </MDBox>
              <MDBox mb={2}>
                <MDInput type="number" id="ambulance_rating" name="ambulance_rating" label="Ambulance Rating" fullWidth />
              </MDBox>
              <MDBox mb={2}>
                <MDInput type="text" id="ambulance_price" name="ambulance_price" label="Ambulance Price" fullWidth />
              </MDBox>
              <MDBox mb={2}>
                <MDInput type="file" id="ambulance_images" name="ambulance_images"fullWidth />
              </MDBox>
              <MDBox mb={2}>
                <MDInput type="number" id="ambulance_drivernumber" name="ambulance_drivernumber" label="Driver Noumber" fullWidth />
              </MDBox>
              <MDBox mb={2}>
                <select name="ambulance_hospital" id="ambulance_hospital">
                  {
                    hospital_list.map((h)=>{
                      return(<option value={h.h_id}>{h.h_name}</option>)
                    })
                  }
                </select>
              </MDBox>
              <MDBox mt={4} mb={1}>
                <MDButton type="submit" variant="gradient" color="info" fullWidth>
                 Add
                </MDButton>
              </MDBox>
            </MDBox>
          </MDBox>
        </Card>
        </Grid>
      </MDBox>
      <MDBox mt={6} mb={3}>
        <Grid container spacing={3} justifyContent="center">
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Notifications;
