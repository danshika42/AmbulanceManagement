import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AddressForm from './AddressForm.js';
import PaymentForm from './PaymentForm';
import Review from './Review';
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";


const steps = ['Address', 'Payment details', 'Review your order'];

function getStepContent(step) {
    switch (step) {
        case 0:
            return <AddressForm />;
        case 1:
            return <PaymentForm />;
        case 2:
            return <Review />;
        default:
            throw new Error('Unknown step');
    }
}



export default function AmbulancePage() {
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep(activeStep + 1);
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    return (
        <DashboardLayout>
            <DashboardNavbar />
            <MDBox className='z-10' pt={6} pb={3}>
                <Grid container spacing={6}>
                    <Grid item xs={12}>
                        <Card>
                            <MDBox
                                mx={2}
                                mt={-3}
                                py={3}
                                px={2}
                                variant="gradient"
                                bgColor="info"
                                borderRadius="lg"
                                coloredShadow="info"
                            >
                                <MDTypography variant="h6" color="white">
                                    Book Ambulance
                                </MDTypography>
                            </MDBox>
                            <MDBox className='w-[60%!important] m-auto' pt={3}>
                                        <Stepper className='mt-8 mb-8' activeStep={activeStep} sx={{ pt: 3, pb: 3,pr:2,pl:2 }}>
                                            {steps.map((label) => (
                                                <Step  key={label}>
                                                    <StepLabel>{label}</StepLabel>
                                                </Step>
                                            ))}
                                        </Stepper>
                                        {activeStep === steps.length ? (
                                            <React.Fragment>
                                                <Typography variant="h5" gutterBottom>
                                                    Thank you for your order.
                                                </Typography>
                                                <Typography variant="subtitle1">
                                                    Your order number is #2001539. We have emailed your order
                                                    confirmation, and will send you an update when your order has
                                                    shipped.
                                                </Typography>
                                            </React.Fragment>
                                        ) : (
                                            <React.Fragment>
                                                {getStepContent(activeStep)}
                                                <Box className='mb-8' sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                                    {activeStep !== 0 && (
                                                        <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                                                            Back
                                                        </Button>
                                                    )}

                                                    <Button
                                                        variant="contained"
                                                        onClick={handleNext}
                                                        style={{'color':'white'}}
                                                        sx={{ mt: 3, ml: 1 }}
                                                    >
                                                        {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                                                    </Button>
                                                </Box>
                                            </React.Fragment>
                                        )}

                            </MDBox>
                        </Card>
                    </Grid>
                </Grid>
            </MDBox>

            <Footer />
        </DashboardLayout>
    );
}
