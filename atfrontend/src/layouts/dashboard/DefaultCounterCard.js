/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// react-countup component
import CountUp from "react-countup";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MDTypography from "components/MDTypography";
import Icon from "@mui/material/Icon";

function DefaultCounterCard({ color, count, title, description,img, ...rest }) {
  return (
    <MKBox p={2} textAlign="center" lineHeight={1}>
      <Icon fontSize="large" color="primary">{img}</Icon>
      {title && (
        <MDTypography variant="h5" mt={2} mb={1}>
          {title}
        </MDTypography>
      )}
      {description && (
        <MDTypography variant="body2" color="text">
          {description}
        </MDTypography>
      )}
    </MKBox>
  );
}

// Setting default props for the DefaultCounterCard
DefaultCounterCard.defaultProps = {
  color: "info",
  description: "",
  title: "",
};

// Typechecking props for the DefaultCounterCard
DefaultCounterCard.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ]),
  count: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default DefaultCounterCard;
