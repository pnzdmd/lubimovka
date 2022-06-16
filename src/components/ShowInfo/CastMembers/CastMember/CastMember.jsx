import styles from './CastMember.module.css';

export function CastMember({ role, name }) {
  return (
    <li className={styles.castMemberItem}>
      <p className={styles.role}>{role}</p>
      <p className={styles.name}>{name}</p>
    </li>
  );
}
