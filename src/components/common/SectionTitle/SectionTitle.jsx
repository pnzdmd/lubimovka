import styles from './SectionTitle.module.css';

export function SectionTitle({ text }) {
  return <h4 className={styles.sectionTitle}>{text}</h4>;
}
