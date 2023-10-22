

import { useState, useEffect, useMemo } from "react";

// react-router components
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import Sidenav from "examples/Sidenav";
import Configurator from "examples/Configurator";

// Material Dashboard 2 React themes
import theme from "assets/theme";
import themeRTL from "assets/theme/theme-rtl";

// Material Dashboard 2 React Dark Mode themes
import themeDark from "assets/theme-dark";
import themeDarkRTL from "assets/theme-dark/theme-rtl";

// RTL plugins
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";


import Dashboard from "layouts/dashboard";
import Tables from "layouts/hospitals";
import Ambulance from "layouts/ambulance";
import Billing from "layouts/billing";
import Notifications from "layouts/notifications";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";
import AmbulancePage from "layouts/ambulancepage";
import { useStateValue } from "ContextProvider/StateContext";
import './index.css'

// Material Dashboard 2 React contexts
import { useMaterialUIController, setMiniSidenav, setOpenConfigurator } from "context";
import jwtDecode from "jwt-decode";

// Images


export default function App() {
  
  const [controller, dispatch] = useMaterialUIController();
 
  const [{Ambulances,HospitalAmbulances,Hospitals, HospitalName,User},dispatchauth]=useStateValue();
 
  const routes = [
    {
      type: "collapse",
      name: "Dashboard",
      key: "dashboard",
      icon: <Icon fontSize="small">dashboard</Icon>, 
      route: "/dashboard",
      component: <Dashboard />,
    },
    {
      type: "collapse",
      name: "Hospital",
      key: "hospitals",
      icon: <Icon fontSize="small">domain_add</Icon>,
      route: "/hospitals",
      component: <Tables />,
    },
    {
      type: "collapse",
      name: "Ambulance",
      key: "ambulances",
      icon: <Icon fontSize="small">timelapse</Icon>,
      route: "/ambulances",
      component: <Ambulance Ambulances={Ambulances} HospitalName={"Ambulances"} />,
    },
    {
      // type: "collapse",
      name: "Hospitalambulances",
      key: "hospitalambulances",
      // icon: <Icon fontSize="small">timelapse</Icon>,
      route: "/hospitalambulances",
      component: <Ambulance Ambulances={HospitalAmbulances} HospitalName={HospitalName} />,
    },
    {
      type: "collapse",
      name: "Add Hospital",
      key: "AddHospitals",
      icon: <Icon fontSize="small">add</Icon>,
      route: "/addHospitals",
      component: <Notifications />,
    },
    {
      type: "collapse",
      name: "Add Ambulance",
      key: "AddAmbulance",
      icon: <Icon fontSize="small">add</Icon>,
      route: "/addambulance",
      component: <Billing  Hospitals={Hospitals}/>,
    },
   
    {
      type: "collapse",
      name: "Profile",
      key: "profile",
      icon: <Icon fontSize="small">person</Icon>,
      route: "/profile",
      component: <Profile />,
    },
    {
      type: "collapse",
      name: "Sign In",
      key: "sign-in",
      icon: <Icon fontSize="small">login</Icon>,
      route: "/authentication/sign-in",
      component: <SignIn />,
    },
    {
      type: "collapse",
      name: "Sign Up",
      key: "sign-up",
      icon: <Icon fontSize="small">assignment</Icon>,
      route: "/authentication/sign-up",
      component: <SignUp />,
    },
    {
    
      name: "Ambulance Page",
      key: "ambulance-page",
      route: "/ambulancepage",
      component: <AmbulancePage />,
    },
  ];
  const {
    miniSidenav,
    direction,
    layout,
    openConfigurator,
    sidenavColor,
    transparentSidenav,
    whiteSidenav,
    darkMode,
  } = controller;
  const [onMouseEnter, setOnMouseEnter] = useState(false);
  const [rtlCache, setRtlCache] = useState(null);
  const { pathname } = useLocation();

  useMemo(() => {
    const cacheRtl = createCache({
      key: "rtl",
      stylisPlugins: [rtlPlugin],
    });

    setRtlCache(cacheRtl);
  }, []);

  // Open sidenav when mouse enter on mini sidenav
  const handleOnMouseEnter = () => {
    if (miniSidenav && !onMouseEnter) {
      setMiniSidenav(dispatch, false);
      setOnMouseEnter(true);
    }
  };

  // Close sidenav when mouse leave mini sidenav
  const handleOnMouseLeave = () => {
    if (onMouseEnter) {
      setMiniSidenav(dispatch, true);
      setOnMouseEnter(false);
    }
  };

  // Change the openConfigurator state
  const handleConfiguratorOpen = () => setOpenConfigurator(dispatch, !openConfigurator);

  // Setting the dir attribute for the body element
  useEffect(() => {
    document.body.setAttribute("dir", direction);
  }, [direction]);

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        if(Object.keys(User).length===0){
          if(route.key!='AddHospitals' && route.key!='AddAmbulance' && route.key!='profile'){
            return <Route exact path={route.route} element={route.component} key={route.key} />;
          }
        }else if(route.key!='sign-in' && route.key!='sign-up'){
          if(User?.is_admin ){
            return <Route exact path={route.route} element={route.component} key={route.key} />;
          }else if(route.key!='AddHospitals' && route.key!='AddAmbulance'){
            return <Route exact path={route.route} element={route.component} key={route.key} />;
          }
        }
      }

      return null;
    });

  const configsButton = (
    <MDBox
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="3.25rem"
      height="3.25rem"
      bgColor="white"
      shadow="sm"
      borderRadius="50%"
      position="fixed"
      right="2rem"
      bottom="2rem"
      zIndex={99}
      color="dark"
      sx={{ cursor: "pointer" }}
      onClick={handleConfiguratorOpen}
    >
      <Icon fontSize="small" color="inherit">
        settings
      </Icon>
    </MDBox>
  );

  var newroutes=routes;
  if(Object.keys(User).length===0){
    newroutes=routes.filter(obj=>(obj.key!=='AddHospitals' && obj.key!=='AddAmbulance' && obj.key!=='profile'));
  }else{
    if(User?.is_admin!=true){
      newroutes=routes.filter(obj=>(obj.key!=='AddHospitals' && obj.key!=='AddAmbulance' && obj.key!=='sign-in' && obj.key!=='sign-up'));
    }else{
      newroutes=routes.filter(obj=>(obj.key!=='sign-in' && obj.key!=='sign-up'));
    }
  }
  
  return direction === "rtl" ? (
    <CacheProvider value={rtlCache}>
      <ThemeProvider theme={darkMode ? themeDarkRTL : themeRTL}>
        <CssBaseline />
        {layout === "dashboard" && (
          <>
            <Sidenav
              color={sidenavColor}
              // brand={(transparentSidenav && !darkMode) || whiteSidenav ? brandDark : brandWhite}
              brandName="Ambulance Tracker"
              routes={newroutes}
              onMouseEnter={handleOnMouseEnter}
              onMouseLeave={handleOnMouseLeave}
            />
            <Configurator />
            {configsButton}
          </>
        )}
        {layout === "vr" && <Configurator />}
        <Routes>
          {getRoutes(routes)}
          <Route path="*" element={<Navigate to="/dashboard" />} />
        </Routes>
      </ThemeProvider>
    </CacheProvider>
  ) : (
    <ThemeProvider theme={darkMode ? themeDark : theme}>
      <CssBaseline />
      {layout === "dashboard" && (
        <>
          <Sidenav
            color={sidenavColor}
            // brand={(transparentSidenav && !darkMode) || whiteSidenav ? brandDark : brandWhite}
            brandName="Ambulance Tracker"
            routes={newroutes}
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
          />
          <Configurator />
          {configsButton}
        </>
      )}
      {layout === "vr" && <Configurator />}
      <Routes>
        {getRoutes(routes)}
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>
    </ThemeProvider>
  );
}
