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

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import bgImage from "assets/images/bg-sign-up-cover.jpeg";
import {  useState } from "react";
import axios from "axios";
import Error from "./Error";

function Cover() {
  
  const [msg,setMsg]=useState({});
  console.log(msg);
 
  function handleSubmit(event){
    event.preventDefault(); 
    const data = new FormData(event.target); 
    axios.post('http://127.0.0.1:8000/createuser/', data)
      .then(res => {
        if(res.data.msg==null){
          window.location.href = '/authentication/sign-in/'
        }
        setMsg(res.data.msg);
      })
      .catch(err => setMsg(err.response.data));
  }
   


  return (
    <CoverLayout image={bgImage}>
      <Card className="mt-[80px]">
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="success"
          mx={2}
          mt={-3}
          p={3}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Join us today
          </MDTypography>
          <MDTypography display="block" variant="button" color="white" my={1}>
           
          </MDTypography>
        </MDBox>
         <MDBox pt={4} pb={3} px={3}>
          
          <MDBox method="post" component="form" onSubmit={handleSubmit} role="form">
           <MDBox mb={2}>
              <MDInput type="text" label="Username" variant="standard" name="username" fullWidth />
              <Error res={msg?.username}/>
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="email" label="Email" variant="standard" name="email" fullWidth />
              <Error res={msg?.email}/>
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="text" label="First Name" variant="standard" name="first_name" fullWidth />
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="text" label="Last Name" variant="standard" name="last_name" fullWidth />
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="password" label="Password" variant="standard" name="password1" fullWidth />
              <Error res={msg?.password1}/>
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="password" label="Confirm Password" variant="standard" name="password2" fullWidth />
              <Error res={msg?.password2}/>
            </MDBox>
            <MDBox display="flex" alignItems="center" ml={-1}>
              <Checkbox name="is_user" value="true"/>
              <MDTypography
                variant="button"
                fontWeight="regular"
                color="text"
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                  User
              </MDTypography>
            </MDBox>
            <MDBox display="flex" alignItems="center" ml={-1}>
              <Checkbox name="is_admin" value="true" />
              <MDTypography
                variant="button"
                fontWeight="regular"
                color="text"
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                  Admin
              </MDTypography>
            </MDBox>
            <MDBox mt={4} mb={1}>
              <MDButton type="submit" variant="gradient" color="info" fullWidth>
                Sign up
              </MDButton>
            </MDBox>
            <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                Already have an account?{" "}
                <MDTypography
                  component={Link}
                  to="/authentication/sign-in"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Sign In
                </MDTypography>
              </MDTypography>
            </MDBox>
           </MDBox>
        </MDBox> 
      </Card>
    </CoverLayout>
  );
}

export default Cover;
