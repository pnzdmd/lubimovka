import { CastMember } from './CastMember';
import styles from './CastMembers.module.css';

export function CastMembers({ castMembersArr }) {
  const castMembers = castMembersArr.map((castMember, i) => {
    const { role, name } = castMember;
    return (
      <CastMember
        role={role}
        name={name}
        key={i}
      />
    );
  });
  return <ul className={styles.castMembersList}>{castMembers}</ul>;
}
