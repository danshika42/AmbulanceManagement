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

// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

// Data
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";

// Dashboard components
import Projects from "layouts/dashboard/components/Projects";
import OrdersOverview from "layouts/dashboard/components/OrdersOverview";
import MKBox from "components/MKBox";


import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';


import Divider from "@mui/material/Divider";
import DefaultCounterCard from "./DefaultCounterCard";
import MDTypography from "components/MDTypography";

import RotatingCard from "./RotatingCard";
import RotatingCardFront from "./RotatingCardFront";
import RotatingCardBack from "./RotatingCardBack";
import DefaultInfoCard from "./DefaultInfoCard";


function Dashboard() {



 
  const mainFeaturedPost = {
    title: 'For Emergency Medical Service',
    description:
      "Help the Patient in case of the Emergency situation by doing just a click. Ambulance comes right in front of the door for help.",
    image: 'https://bit.ly/3K6VED8',
    imageText: 'ambulance',
  };
  
  const featuredPosts = [
    {
      title: 'Featured post',
      date: 'Nov 12',
      description:
        'This is a wider card with supporting text below as a natural lead-in to additional content.',
      image: 'https://source.unsplash.com/random',
      imageLabel: 'Image Text',
    },
    {
      title: 'Post title',
      date: 'Nov 11',
      description:
        'This is a wider card with supporting text below as a natural lead-in to additional content.',
      image: 'https://source.unsplash.com/random',
      imageLabel: 'Image Text',
    },
  ];
  
  
  
  const theme = createTheme();



  const { sales, tasks } = reportsLineChartData;
 
  return (
    <>
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={1}>
        <ThemeProvider theme={theme} >
          <CssBaseline />
          <Container maxWidth="lg">
            <main className="main-header" style={{marginBottom:'80px'}}>
              <MainFeaturedPost post={mainFeaturedPost} />
              {/* <Grid container spacing={4}>
                {featuredPosts.map((post) => (
                  <FeaturedPost key={post.title} post={post} />
                ))}
              </Grid> */}
            </main>
          </Container>
        </ThemeProvider>
        <MKBox component="section" style={{marginBottom:'60px'}} py={3}>
            <Container>
            <Grid container item xs={12} lg={7} justifyContent="center" mx="auto">
              <MDTypography variant="h2" mt={2} mb={1}>
                  Our Other Medical Services
              </MDTypography>
            </Grid>
            <Grid container justifyContent="center" paddingTop={5} style={{width:'90%',fontSize:'0.7rem'}} item  sx={{ mx: "auto" }}>
              <Grid item xs={12} md={3}>
                <DefaultCounterCard
                  img="airline_seat_individual_suite"
                  title="Health Care"
                  description="From buttons, to inputs, navbars, alerts or cards, you are covered"
                />
              </Grid>
              <Grid item xs={12} md={3} display="flex">
                <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, mx: 0 }} />
                <DefaultCounterCard
                  count={15}
                  img="add_box"
                  suffix="+"
                  title="First Aid"
                  description="One of the project's standout features is its integrated first aid assistance. This empowers individuals at the scene to take immediate life-saving actions."
                />
                <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, ml: 0 }} />
              </Grid>
              <Grid item xs={12} md={3}>
                <DefaultCounterCard
                  count={3}
                  img="airport_shuttle"
                  title="Easy Tracking"
                  description="Save 3-3 weeks of work when you use our pre-made pages for your website"
                />
              </Grid>
            </Grid>
          </Container>
        </MKBox>

      </MDBox>
        
      <Footer />
    </DashboardLayout>

   
    </>

  );
}

export default Dashboard;
