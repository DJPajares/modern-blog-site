import Head from 'next/head';
import { Box, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import CardImage from '@/components/global/CardImage';
import ArticleCard from '@/components/global/ArticleCard';
import ArticleCardSmall from '@/components/global/ArticleCardSmall';
import { mockArticles } from '@/data/mockData';
import { useRouter } from 'next/router';

const img1 =
  'https://images.pexels.com/photos/1766604/pexels-photo-1766604.jpeg';
const img2 =
  'https://images.pexels.com/photos/9945333/pexels-photo-9945333.jpeg';
const img3 =
  'https://images.pexels.com/photos/4546024/pexels-photo-4546024.jpeg';
const img4 =
  'https://images.pexels.com/photos/5490235/pexels-photo-5490235.jpeg';

export default function Home() {
  const router = useRouter();
  const theme = useTheme();
  const colors = theme.palette;
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <Head>
        <title>Inkwell</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <style>{`
          body {
            background-image: url(${img1});
            background-size: cover;
            background-position: center;
          }
        `}</style>
      </Head>

      <Box
        sx={{
          m: isMobile ? 2 : 10,
          p: 2,
          backgroundColor: colors.background.default,
          borderRadius: 8
        }}
      >
        <Box sx={{ pb: 2, display: 'flex', justifyContent: 'center' }}>
          <Typography variant="h1" fontWeight={400}>
            Articles
          </Typography>
        </Box>

        {/* {mockArticles.map((article, index) => (
          <Box key={index} sx={{ pb: 2 }}>
            <ArticleCard
              image={article.image}
              height={isMobile ? 200 : 300}
              title={article.title}
              category={article.category}
              author={article.author}
            />
          </Box>
        ))} */}

        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <ArticleCard
                id={mockArticles[0].id}
                contentImage={mockArticles[0].contentImage}
                category={mockArticles[0].category}
                title={mockArticles[0].title}
                author={mockArticles[0].author}
                authorImage={mockArticles[0].authorImage}
                height={516}

                // data={mockArticles[0]}
                // contentImage={mockArticles[0].contentImage}
                // category={mockArticles[0].category}
                // title={mockArticles[0].title}
                // author={mockArticles[0].author}
                // authorImage={mockArticles[0].authorImage}
              />
            </Grid>
            <Grid item xs={4}>
              <Grid container spacing={2} direction="column">
                <Grid item xs={6}>
                  <ArticleCard
                    id={mockArticles[2].id}
                    contentImage={mockArticles[2].contentImage}
                    category={mockArticles[2].category}
                    title={mockArticles[2].title}
                    author={mockArticles[2].author}
                    authorImage={mockArticles[2].authorImage}
                    height={250}
                    isSmall
                    // data={mockArticles[2]}
                    // contentImage={mockArticles[3].contentImage}
                    // category={mockArticles[3].category}
                    // title={mockArticles[3].title}
                    // author={mockArticles[3].author}
                    // authorImage={mockArticles[3].authorImage}
                  />
                </Grid>
                <Grid item xs={6}>
                  <ArticleCard
                    id={mockArticles[3].id}
                    contentImage={mockArticles[3].contentImage}
                    category={mockArticles[3].category}
                    title={mockArticles[3].title}
                    author={mockArticles[3].author}
                    authorImage={mockArticles[3].authorImage}
                    height={250}
                    isSmall
                    // contentImage={mockArticles[2].contentImage}
                    // category={mockArticles[2].category}
                    // title={mockArticles[2].title}
                    // author={mockArticles[2].author}
                    // authorImage={mockArticles[2].authorImage}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
