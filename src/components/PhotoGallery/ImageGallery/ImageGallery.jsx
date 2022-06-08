import styles from './ImageGallery.module.css';
import { Image } from './Image';

export function ImageGallery({ imagesArr }) {
  if (!Array.isArray(imagesArr)) {
    return null;
  }

  const images = imagesArr.map((image, i) => {
    const { imageSrc, imageTitle } = image;
    if (!imageSrc && typeof image === 'string') {
      return <Image src={image} />;
    }
    return (
      <Image
        src={imageSrc}
        title={imageTitle}
        key={i}
      />
    );
  });

  return <div className={styles.gridWrapper}>{images}</div>;
}
