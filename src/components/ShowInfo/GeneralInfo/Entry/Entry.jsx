import styles from './Entry.module.css';

export function Entry({ text }) {
  return <h6 className={styles.entry}>{text}</h6>;
}
