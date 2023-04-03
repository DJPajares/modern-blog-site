import { Card, CardContent, CardMedia, Typography } from '@mui/material';

type CardImageProps = {
  image: string;
  height?: number | string;
};
const CardImage = ({ image, height = '100%' }: CardImageProps) => {
  return (
    <Card
      sx={{
        height: '100%',
        borderRadius: 2,
        boxShadow: 2
      }}
    >
      <CardMedia
        component="img"
        height={height}
        image={image}
        sx={{
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
    </Card>
  );
};

export default CardImage;
