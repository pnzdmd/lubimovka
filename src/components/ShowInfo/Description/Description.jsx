import styles from './Description.module.css';
import LEFT_ARROW from '../../../assets/images/ShowInfo/Description/link-image-left-arrow.svg';
import DOWN_ARROW from '../../../assets/images/ShowInfo/Description/link-image-down-arrow.svg';

export function Description({
  showName,
  videoIframeSrc,
  descriptionParagraphs,
  article,
}) {
  const description = descriptionParagraphs.map((paragraph) => (
    <p className={styles.textParagraph}>{paragraph}</p>
  ));
  return (
    <div className={styles.descriptionWrapper}>
      <iframe
        className={styles.videoTrailer}
        title="video"
        width="560"
        height="315"
        src={videoIframeSrc}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
      <div className={styles.description}>{description}</div>
      <h6 className={styles.linksTitle}>{article.linksTitle}</h6>
      <div className={styles.linksContainer}>
        <h7 className={styles.title}>{showName}</h7>
        <h7 className={styles.titleMinWidth}>{article.titleMinWidth}</h7>
        <a
          className={styles.link}
          href="#some-id"
        >
          {'СМОТРЕТЬ ЧИТКУ'}
          <img
            className={styles.leftArrow}
            src={LEFT_ARROW}
            alt="left arrow"
          />
        </a>
        <a
          className={styles.link}
          href="#some-id"
        >
          {'СКАЧАТЬ ПЬЕСУ'}
          <img
            className={styles.downArrow}
            src={DOWN_ARROW}
            alt="down arrow"
          />
        </a>
      </div>
      <div className={styles.article}>
        <h7 className={styles.author}>{article.author}</h7>
        <h7 className={styles.authorMinWidth}>{article.authorMinWidth}</h7>
        <p className={styles.city}>{article.city}</p>
        <p className={styles.year}>{article.year}</p>
      </div>
    </div>
  );
}
