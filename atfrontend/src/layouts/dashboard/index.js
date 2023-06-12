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
      "Help / Rescues the Patient in case of the Emergency situation by doing just a click. Medulance Ambulance comes right in front of the door for help.",
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
                  Our Other medical services
              </MDTypography>
            </Grid>
            <Grid container item  sx={{ mx: "auto" }}>
              <Grid item xs={12} md={3}>
                <DefaultCounterCard
                 img="Timelapse"
                  title="Healthcare"
                  description="From buttons, to inputs, navbars, alerts or cards, you are covered"
                />
              </Grid>
              <Grid item xs={12} md={3} display="flex">
                <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, mx: 0 }} />
                <DefaultCounterCard
                  count={15}
                  img="Timelapse"
                  suffix="+"
                  title="First Aid"
                  description="Mix the sections, change the colors and unleash your creativity"
                />
                <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, ml: 0 }} />
              </Grid>
              <Grid item xs={12} md={3}>
                <DefaultCounterCard
                  count={3}
                  img="timelapse"
                  title="Easy Tracking"
                  description="Save 3-3 weeks of work when you use our pre-made pages for your website"
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <DefaultCounterCard
                  count={3}
                  img="domain-add"
                  title="Pages"
                  description="Save 3-3 weeks of work when you use our pre-made pages for your website"
                />
              </Grid>
            </Grid>
          </Container>
        </MKBox>

      <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid container item xs={12} lg={7} justifyContent="center" mx="auto">
          <MDTypography variant="h2" mt={2} mb={1}>
            Why Choose Us?
          </MDTypography>
        </Grid>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                // image={bgFront}
                icon="touch_app"
                title={
                  <>
                    Feel the
                    <br />
                    Material Kit
                  </>
                }
                description="All the MUI components that you need in a development have been re-design with the new look."
              />
              <RotatingCardBack
                // image={bgBack}
                title="Discover More"
                description="You will save a lot of time going from prototyping to full-functional code because all elements are implemented."
                action={{
                  type: "internal",
                  route: "/sections/page-sections/page-headers",
                  label: "start with header",
                }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="content_copy"
                  title="Patient first"
                  description=""
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="flip_to_front"
                  title="Emergency assistance time of 15 minutes or less"
                  description=""
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="price_change"
                  title="Save Time & Money"
                  description="Creating your design from scratch with dedicated designers can be very expensive. Start with our Design System."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="devices"
                  title="Fully Responsive"
                  description="Regardless of the screen size, the website content will naturally fit the given resolution."
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={9.5}>
              <ComplexStatisticsCard
                color="dark"
                icon="weekend"
                title="Bookings"
                count={281}
                percentage={{
                  color: "success",
                  amount: "+55%",
                  label: "than lask week",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                icon="leaderboard"
                title="Today's Users"
                count="2,300"
                percentage={{
                  color: "success",
                  amount: "+3%",
                  label: "than last month",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="success"
                icon="store"
                title="Revenue"
                count="33k"
                percentage={{
                  color: "success",
                  amount: "+1%",
                  label: "than yesterday",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="primary"
                icon="person_add"
                title="Followers"
                count="+91"
                percentage={{
                  color: "success",
                  amount: "",
                  label: "Just updated",
                }}
              />
            </MDBox>
          </Grid>
        </Grid>
        <MDBox mt={4.5}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsBarChart
                  color="info"
                  title="website views"
                  description="Last Campaign Performance"
                  date="campaign sent 2 days ago"
                  chart={reportsBarChartData}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="success"
                  title="daily sales"
                  description={
                    <>
                      (<strong>+15%</strong>) increase in today sales.
                    </>
                  }
                  date="updated 4 min ago"
                  chart={sales}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="dark"
                  title="completed tasks"
                  description="Last Campaign Performance"
                  date="just updated"
                  chart={tasks}
                />
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
        {/* <MDBox>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={8}>
              <Projects />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <OrdersOverview />
            </Grid>
          </Grid>
        </MDBox>
         */}

      </MDBox>
        
      <Footer />
    </DashboardLayout>

   
    </>

  );
}

export default Dashboard;
