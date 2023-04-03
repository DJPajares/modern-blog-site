import { Box } from '@mui/material';
import Head from 'next/head';

const Wrapper = (props) => {
  return (
    <Box
      sx={{
        m: 5,
        backgroundColor: 'white',
        height: 500,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50
      }}
    >
      {props.children}
    </Box>
  );
};

export default Wrapper;
