import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import React from "react";
import Form from "./Form";
const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const alt = theme.palette.background.alt;

  return (
    <div>
      <Box>
        <Box width="100%" backgroundColor={alt} p="1rem 6%" textAlign="center">
          <Typography fontWeight="bold" fontSize="32px" color="#004AAD">
            Bryte Developers Network
          </Typography>
        </Box>
        <Box
          width={isNonMobileScreens ? "50%" : "93%"}
          p="2rem"
          m="2rem auto"
          borderRadius="1.5rem"
          backgroundColor={alt}
        >
          <Typography
            fontWeight="400"
            variant="h5"
            sx={{ mb: "1.5rem" }}
            color="#004AAD"
          >
            Join the leading developers
          </Typography>
          <Form />
        </Box>
      </Box>
    </div>
  );
};

export default LoginPage;
