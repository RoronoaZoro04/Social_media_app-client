import { Box, Typography ,useTheme, useMediaQuery } from '@mui/material';
import React from 'react';
import Form from './Form'

const LoginPage = () => {
  const theme = useTheme();
  const isMobileMenuScreens = useMediaQuery("(min-width: 1000px)");
  return (
    <Box>
    <Box width="100" backgroundColor={theme.palette.background.alt} p="1rem 6%" textAlign="center">
    <Typography
          fontWeight="bold"
          fontSize="32px"
          color="primary"
        >
          VIRUS
        </Typography>
    </Box>
    <Box 
    width={isMobileMenuScreens?"50%":"60%"}
    p="2rem 6%"
    textAlign="center"
    borderRadius="1.5rem"
    backgroundColor={theme.palette.background.alt}
    marginLeft="25vw"
    >
      <Typography fontWeight="500" variant="h5" sx={{mb: "1.5rem"}}>
          Welcome to VIRUS, the Social Media for Rookies
      </Typography>
      <Form/>
    </Box>
    </Box>
  )
}

export default LoginPage;