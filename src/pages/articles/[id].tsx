import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import Head from 'next/head';
import Image from 'mui-image';
import { useRouter } from 'next/router';
import Avatar from '@/components/global/Avatar';
import { mockArticles } from '@/data/mockData';

const Article = () => {
  const router = useRouter();
  const id = parseInt(router.query.id as any as string, 10);
  const data = mockArticles.find((x) => x.id == id) || mockArticles[0];

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const Title = () => {
    return (
      <Box py={2}>
        <Typography variant="h3">{data.title}</Typography>
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
          alignItems: 'center',
          pt: 2
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center'
          }}
        >
          <Avatar src={data.authorImage} alt="author" width={24} />
          <Typography variant="subtitle1" fontWeight={500} ml={1}>
            {data.author}
          </Typography>
        </Box>

        <Typography variant="subtitle1" fontWeight={500}>
          {data.category}
        </Typography>
      </Box>
    );
  };

  const ContentImage = () => {
    return (
      <Box pt={1}>
        <Image
          src={data.contentImage}
          alt={data.category}
          width="100%"
          duration={1500}
        />
      </Box>
    );
  };

  const Date = () => {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', py: 1 }}>
        <Typography variant="subtitle2">{`Date published: ${data.date}`}</Typography>
      </Box>
    );
  };

  const Content = () => {
    return (
      <Box py={8}>
        <Typography variant="body1" style={{ whiteSpace: 'pre-line' }}>
          {data.content}
        </Typography>
      </Box>
    );
  };

  return (
    <>
      <Head>
        <title>{`Article: ${data.category} - ${data.title}`}</title>
        <meta
          name="description"
          content={`${data.category} article titled ${data.title}`}
        />
      </Head>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          my: isMobile ? 2 : 10
        }}
      >
        <Box sx={{ width: isMobile ? '80%' : '50%' }}>
          <Title />

          <Subtitle />

          <ContentImage />

          <Date />

          <Content />
        </Box>
      </Box>
    </>
  );
};

export default Article;
