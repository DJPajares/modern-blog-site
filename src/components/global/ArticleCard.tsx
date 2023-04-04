import { Box, Card, Typography, alpha, useTheme } from '@mui/material';
import { colorToken } from '@/config/themes';
import { useRouter } from 'next/router';
import Avatar from './Avatar';

type ArticleCardProps = {
  data: {
    id: number;
    page: string;
    date: string;
    contentImage: string;
    category: string;
    title: string;
    author: string;
    authorImage: string;
  };
  height?: number | string;
};

const ArticleCard = ({ data, height = '100%' }: ArticleCardProps) => {
  const router = useRouter();
  const theme = useTheme();
  const colors = theme.palette;

  const Category = () => {
    return (
      <Box>
        <Typography variant="subtitle1">{data.category}</Typography>
      </Box>
    );
  };

  const Title = () => {
    return (
      <Box>
        <Typography variant="h2" fontWeight={500}>
          {data.title}
        </Typography>
      </Box>
    );
  };

  const Author = () => {
    return (
      <Box py={1}>
        <Box
          sx={{
            width: 'fit-content',
            backgroundColor: alpha(colorToken.grey[700], 0.3),
            borderRadius: 10,
            p: 0.5,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <Avatar src={data.authorImage} alt="author" width={24} />
          <Typography variant="caption" px={1}>
            {data.author}
          </Typography>
        </Box>
      </Box>
    );
  };

  return (
    <Card
      raised
      sx={{
        height,
        p: 2,
        backgroundImage: `url(${data.contentImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: 8,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        color: colors.text.secondary,
        cursor: 'pointer'
      }}
      onClick={() =>
        // router.push({
        //   pathname: `/main/article`,
        //   query: { data: JSON.stringify(data) }
        // })
        router.push(`/main/article?data=${JSON.stringify(data)}`, undefined, {
          shallow: true
        })
      }
    >
      <Category />
      <Title />
      <Author />
    </Card>
  );
};

export default ArticleCard;
