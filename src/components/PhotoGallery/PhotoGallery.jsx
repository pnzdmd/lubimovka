import styles from './PhotoGallery.module.css';
import { SectionTitle } from '../common/SectionTitle';
import { ImageGallery } from './ImageGallery/ImageGallery.jsx';

export function PhotoGallery({ gallery }) {
  const { title, images } = gallery;

  if (!Array.isArray(images)) {
    return null;
  }

  return (
    <section className={styles.photoContainer}>
      <SectionTitle text={title} />
      <ImageGallery imagesArr={images} />
    </section>
  );
}
