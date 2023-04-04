import { Box, Typography } from '@mui/material';

const ErrorPage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        // height: '100vh'
        m: 10
      }}
    >
      <Typography variant="h1">404</Typography>
      <Typography variant="subtitle1">Page not found</Typography>
    </Box>
  );
};

export default ErrorPage;
