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
import Grid from "@mui/material/Grid";
import MDBox from "components/MDBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Footer from "examples/Footer";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import Card from "@mui/material/Card";

function Notifications() {
  const formRef = useRef(null);


  function handleSubmit(event) {
    event.preventDefault(); // Prevents the default form submission behavior
    const data = new FormData(event.target); // Gets the data from the form inputs
    fetch('http://127.0.0.1:8000/createhospital/', {
      method: 'POST', // Specifies the HTTP method to use
      body: data // Includes the data in the request body
    })
    .then(response => {
      console.log(data);
    })
    .catch(error => {
      console.log(error);  
      console.log("not done");  
    });
    formRef.current.reset();
  }
  

  return (
      <DashboardLayout>
        <MDBox mt={6} mb={3}>
          <Grid container spacing={3} justifyContent="center">
          <Card>
          <MDBox pt={4} pb={3} px={3}>
            <MDBox ref={formRef} component="form" role="form" method="post" onSubmit={handleSubmit}>
              <MDBox mb={2}>
                <MDInput type="text" id="hospital_name" name="hospital_name" label="Hospital name"  fullWidth />
              </MDBox>
              <MDBox mb={2}>
                <MDInput type="text" id="hospital_city" name="hospital_city" label="Hospital City" fullWidth />
              </MDBox>
              <MDBox mb={2}>
                <MDInput type="text" id="hospital_distance" name="hospital_distance" label="Hospital Distance" fullWidth />
              </MDBox>
              <MDBox mb={2}>
                <MDInput type="number" id="hospital_rating" name="hospital_rating" label="Hospital Rating" fullWidth />
              </MDBox>
              <MDBox mb={2}>
                <MDInput type="file" id="hospital_images" name="hospital_images" fullWidth />
              </MDBox>
              <MDBox mb={2}>
                <MDInput type="number" id="hospital_location" name="hospital_location" label="Hospital Location" fullWidth />
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
      <Footer />
    </DashboardLayout>
  );
}

export default Notifications;
