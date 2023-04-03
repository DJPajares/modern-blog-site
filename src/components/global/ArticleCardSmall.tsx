import { Avatar, Box, Card, Typography, alpha, useTheme } from '@mui/material';
import { colorToken } from '@/config/themes';

type ArticleCardProps = {
  contentImage: string;
  height?: number | string;
  category: string;
  title: string;
  author?: string;
  authorImage?: string;
};

const ArticleCardSmall = ({
  contentImage,
  height = '100%',
  category,
  title,
  author,
  authorImage
}: ArticleCardProps) => {
  const theme = useTheme();
  const colors = theme.palette;

  const Category = () => {
    return (
      <Box>
        <Typography variant="subtitle2">{category}</Typography>
      </Box>
    );
  };

  const Title = () => {
    return (
      <Box>
        <Typography variant="h3" fontWeight={500}>
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
          <Avatar src={authorImage} sx={{ width: 24, height: 24 }} />
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
        color: colors.text.secondary
      }}
    >
      <Category />
      <Title />
      {/* <Author /> */}
    </Card>
  );
};

export default ArticleCardSmall;
