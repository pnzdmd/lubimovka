import styles from './ImageGallery.module.css';
import { Image } from './Image';

export function ImageGallery({ imagesArr }) {
  if (!Array.isArray(imagesArr)) {
    return null;
  }

  const images = imagesArr.map((image) => {
    const { imageSrc, imageTitle } = image;
    if (
      (!imageSrc || typeof imageSrc !== 'string') &&
      (!image || typeof image !== 'string')
    ) {
      return null;
    }
    const src = typeof imageSrc === 'string' ? imageSrc : image;
    return (
      <Image
        src={src}
        title={imageTitle}
        key={src}
      />
    );
  });

  return <div className={styles.gridWrapper}>{images}</div>;
}
