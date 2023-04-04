import { Box, Card, Typography, alpha, useTheme } from '@mui/material';
import { colorToken } from '@/config/themes';
import { useRouter } from 'next/router';
import Avatar from './Avatar';

type ArticleCardProps = {
  id: number;
  contentImage: string;
  category: string;
  title: string;
  author: string;
  authorImage: string;
  isSmall?: boolean;
  height?: number | string;
};

const ArticleCard = ({
  id,
  contentImage,
  category,
  title,
  author,
  authorImage,
  isSmall = false,
  height = '100%'
}: ArticleCardProps) => {
  const router = useRouter();
  const theme = useTheme();
  const colors = theme.palette;

  const Category = () => {
    return (
      <Box>
        <Typography variant={isSmall ? 'subtitle2' : 'subtitle1'}>
          {category}
        </Typography>
      </Box>
    );
  };

  const Title = () => {
    return (
      <Box>
        <Typography variant={isSmall ? 'h4' : 'h2'} fontWeight={500}>
          {title}
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
          <Avatar src={authorImage} alt="author" width={24} />
          <Typography variant="caption" px={1}>
            {author}
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
        backgroundImage: `url(${contentImage})`,
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
        // router.push(
        //   `/main/article?data=${JSON.stringify(data)}`,
        //   '/main/article',
        //   {
        //     shallow: true
        //   }
        // )
        // router.push(`/main/article?id=${id}`)
        router.push(`/articles/${id}`)
      }
    >
      <Category />
      <Title />
      {!isSmall && <Author />}
    </Card>
  );
};

export default ArticleCard;
