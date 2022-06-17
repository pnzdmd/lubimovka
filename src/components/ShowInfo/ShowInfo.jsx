import styles from './ShowInfo.module.css';
import { GeneralInfo } from './GeneralInfo';
import { CastMembers } from './CastMembers';
import { Description } from './Description';

export function ShowInfo({ showData }) {
  const {
    duration,
    ageRestriction,
    castMembers,
    showName,
    videoIframeSrc,
    descriptionParagraphs,
    article,
  } = showData;
  return (
    <section className={styles.info}>
      <div className={styles.castMembers}>
        <GeneralInfo
          duration={duration}
          ageRestriction={ageRestriction}
        />
        <CastMembers castMembersArr={castMembers} />
      </div>
      <Description
        showName={showName}
        videoIframeSrc={videoIframeSrc}
        descriptionParagraphs={descriptionParagraphs}
        article={article}
      />
    </section>
  );
}
