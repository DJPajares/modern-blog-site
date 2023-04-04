import {
  Box,
  Card,
  Typography,
  alpha,
  styled,
  useMediaQuery,
  useTheme
} from '@mui/material';
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
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const StyledCard = styled(Card)(() => ({
    height,
    backgroundImage: `url(${contentImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    cursor: 'pointer',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
      transform: 'scale(1.02)',
      cursor: 'pointer'
    }
  }));

  const textCategory = () => {
    if (isMobile) {
      return isSmall ? 'subtitle2' : 'subtitle1';
    } else {
      return isSmall ? 'body2' : 'body1';
    }
  };

  const textTitle = () => {
    if (isMobile) {
      return isSmall ? 'h6' : 'h4';
    } else {
      return isSmall ? 'h4' : 'h2';
    }
  };

  const Category = () => {
    return (
      <Box>
        <Typography variant={textCategory()}>{category}</Typography>
      </Box>
    );
  };

  const Title = () => {
    return (
      <Box>
        <Typography variant={textTitle()} fontWeight={500}>
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
    <StyledCard
      sx={{
        p: 2,
        borderRadius: 2,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        color: colors.text.secondary
      }}
      onClick={() => router.push(`/articles/${id}`)}
      raised
    >
      <Category />
      <Title />
      {!isSmall && <Author />}
    </StyledCard>
  );
};

export default ArticleCard;
