import { Avatar, Box, Typography } from '@mui/material';
import Head from 'next/head';
import Image from 'mui-image';
import { useRouter } from 'next/router';

const Article = () => {
  const router = useRouter();
  const { data } = router.query;

  const parsedData = JSON.parse(data as string);

  const Title = () => {
    return (
      <Box py={2}>
        <Typography variant="h3">{parsedData.title}</Typography>
      </Box>
    );
  };

  const Subtitle = () => {
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center'
          }}
        >
          <Avatar
            src={parsedData.authorImage}
            sx={{ width: 24, height: 24, mr: 1 }}
          />
          <Typography variant="subtitle1" fontWeight={500}>
            {parsedData.author}
          </Typography>
        </Box>

        <Typography variant="subtitle1" fontWeight={500}>
          {parsedData.category}
        </Typography>
      </Box>
    );
  };

  const ContentImage = () => {
    return (
      <Box pt={1} pb={2}>
        <Image
          src={parsedData.contentImage}
          alt={parsedData.category}
          width="100%"
          duration={1500}
        />
      </Box>
    );
  };

  const Content = () => {
    return (
      <Box py={2}>
        <Typography variant="body1" style={{ whiteSpace: 'pre-line' }}>
          {parsedData.content}
        </Typography>
      </Box>
    );
  };

  return (
    <>
      <Head>
        <title>{parsedData.category}</title>
      </Head>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          my: 10
        }}
      >
        <Box sx={{ width: '50%' }}>
          <Title />

          <Subtitle />

          <ContentImage />

          <Content />
        </Box>
      </Box>
    </>
  );
};

export default Article;
