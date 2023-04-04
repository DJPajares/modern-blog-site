import Image from 'next/image';

type AvatarProps = {
  src: string;
  alt: string;
  width: number;
};

const Avatar = ({ src, alt, width }: AvatarProps) => {
  return (
    <Image
      loader={() => src}
      src={src}
      alt={alt}
      width={width}
      height={width}
      style={{ objectFit: 'cover', borderRadius: '50%' }}
    />
  );
};

export default Avatar;
