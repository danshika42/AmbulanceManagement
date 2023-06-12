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

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import MuiLink from "@mui/material/Link";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

function RotatingCardBack({ color, image, title, description, action }) {
  return (
    <MKBox
      display="flex"
      justifyContent="center"
      alignItems="center"
      borderRadius="lg"
      coloredShadow={color}
      position="absolute"
      width="100%"
      height="100%"
      top={0}
      left={0}
      zIndex={5}
      sx={{
        backgroundImage: ({ palette: { gradients }, functions: { linearGradient, rgba } }) =>
          `${linearGradient(
            rgba(gradients[color] ? gradients[color].main : gradients.info.main, 0.85),
            rgba(gradients[color] ? gradients[color].main : gradients.info.main, 0.85)
          )}, url(${image})`,
        backgroundSize: "cover",
        backfaceVisibility: "hidden",
        transform: "rotateY(180deg)",
      }}
    >
      <MKBox pt={12} pb={2} px={2} textAlign="center" lineHeight={1}>
        <MDTypography variant="h3" color="white" gutterBottom>
          {title}
        </MDTypography>
        <MDTypography variant="body2" color="white" opacity={0.8}>
          {description}
        </MDTypography>
        {action && (
          <MKBox width="50%" mt={4} mb={2} mx="auto">
            {action.type === "external" ? (
              <MDButton
                component={MuiLink}
                href={action.route}
                target="_blank"
                rel="noreferrer"
                color="white"
                size="small"
                fullWidth
              >
                {action.label}
              </MDButton>
            ) : (
              <MDButton component={Link} to={action.route} color="white" size="small" fullWidth>
                {action.label}
              </MDButton>
            )}
          </MKBox>
        )}
      </MKBox>
    </MKBox>
  );
}

// Setting default props for the RotatingCardBack
RotatingCardBack.defaultProps = {
  color: "info",
};

// Typechecking props for the RotatingCardBack
RotatingCardBack.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "dark",
    "light",
  ]),
  image: PropTypes.string.isRequired,
  title: PropTypes.node.isRequired,
  description: PropTypes.node.isRequired,
  action: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      type: PropTypes.oneOf(["external", "internal"]).isRequired,
      route: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ]).isRequired,
};

export default RotatingCardBack;
