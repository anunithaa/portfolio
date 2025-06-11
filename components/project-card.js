import styles from "./ProjectCard.module.css";
import { FaArrowRight } from "react-icons/fa";

export default function ProjectCard({
  title,
  description,
  date,
  tags,
  github,
}) {
  return (
    <div className={styles.projectCard}>
      <h3 className={styles.projectTitle}>{title}</h3>
      <p className={styles.projectDate}>{date}</p>

      <p className={styles.projectDescription}>{description}</p>
      <div className={styles.projectTags}>
        {tags.map((tag, index) => {
          const tagClassMap = {
            Arduino: styles.tagGreen,
            "Autodesk Fusion": styles.tagGreen,
            VSCode: styles.tagGreen,
            Eclipse: styles.tagGreen,
            College: styles.tagPurple,
            Hackathon: styles.tagPurple,
            Java: styles.tagOrange,
            "C++": styles.tagOrange,
            JavaScript: styles.tagOrange,
            CSS: styles.tagOrange,
            HTML: styles.tagOrange,
          };

          const tagClass = tagClassMap[tag] || styles.tagBlue;

          return (
            <span key={index} className={`${styles.tag} ${tagClass}`}>
              {tag}
            </span>
          );
        })}
      </div>
      <a
        href={github}
        className={styles.githubLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        View Project <FaArrowRight className={styles.iconArrow} />
      </a>
    </div>
  );
}
