import styles from "./flipcard.module.css";

export default function FlipCard({
  frontText,
  icon,
  years,
  type,
  listOne,
  listTwo,
  listThree,
}) {
  return (
    <div className={styles.card}>
      <div className={styles.inner}>
        <div className={styles.front}>
          <div className={styles.content}>
            <div className={styles.icon}>{icon}</div>
            <span className={`${styles.frontTag} ${styles[type]}`}>
              {frontText}
            </span>
          </div>
        </div>

        <div className={styles.back}>
          <div className={styles.experienceTop}>
            <h2>{years}</h2>
            <p>of experience</p>
          </div>
          <ul className={styles.detailsList}>
            <li>{listOne}</li>
            <li>{listTwo}</li>
            <li>{listThree}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
