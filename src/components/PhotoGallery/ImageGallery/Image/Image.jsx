import styles from './Image.module.css';

export function Image({ src, title }) {
  const alt = title ? title : 'Gallery image';
  return <img className={styles.image} src={src} alt={alt} />;
}
