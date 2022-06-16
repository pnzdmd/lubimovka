import { Entry } from './Entry';
import styles from './GeneralInfo.module.css';
import SEPARATOR_IMAGE from '../../../assets/images/ShowInfo/GeneralInfo/general_info_separator_image.svg';

export function GeneralInfo({ duration, ageRestriction }) {
  return (
    <div className={styles.generalInfo}>
      <Entry text={duration} />
      <img
        className={styles.separatorImage}
        src={SEPARATOR_IMAGE}
        alt="separator"
      />
      <Entry text={ageRestriction} />
    </div>
  );
}
