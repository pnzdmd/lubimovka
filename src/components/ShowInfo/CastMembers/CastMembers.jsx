import { CastMember } from './CastMember';
import styles from './CastMembers.module.css';

export function CastMembers({ castMembersArr }) {
  const castMembers = castMembersArr.map((castMember) => {
    const { role, name } = castMember;
    return (
      <CastMember
        role={role}
        name={name}
        key={(role + name).substring(0, 30)}
      />
    );
  });
  return <ul className={styles.castMembersList}>{castMembers}</ul>;
}
