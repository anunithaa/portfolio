// components/Timeline.js
import React from "react";
import { motion } from "framer-motion";
import styles from "./Timeline.module.css";
import { FaBriefcase } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const normalizeDescription = (desc) => {
  if (!desc) return [];
  if (Array.isArray(desc)) return desc;
  return [desc]; // Convert string to single-item array
};

const Timeline = ({ items }) => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const itemVariants = {
    hidden: (isLeft) => ({
      opacity: 0,
      x: isLeft ? -50 : 50,
    }),
    show: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <motion.div
      className={styles.timeline}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px 0px" }}
      variants={containerVariants}
    >
      {/* Timeline center line */}
      <div className={styles.timelineLine} />

      {items.map((item, index) => {
        const isLeft = index % 2 === 0;

        return (
          <div
            key={index}
            className={`${styles.timelineItem} ${
              isLeft ? styles.left : styles.right
            }`}
          >
            {/* Animated content box */}
            <motion.div
              custom={isLeft}
              variants={itemVariants}
              className={styles.timelineContent}
            >
              <div className={styles.timelineDot} />
              <h3 className={styles.timelineTitle}>{item.title}</h3>
              <h2 className={styles.timelineJob}>
                <FaBriefcase className={styles.jobIcon} /> {item.job}
              </h2>
              <p className={styles.timelineDate}>{item.date}</p>
              <div className={styles.timelineDescription}>
                <ul>
                  {normalizeDescription(item.description).map((point, i) => (
                    <li key={i} className={styles.bulletPoint}>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              {item.links && item.links.length > 0 && (
                <div className={styles.timelineLinks}>
                  {item.links.map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.timelineLink}
                      whileHover={{ y: -2 }} // Framer motion hover
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <span>{link.text}</span>
                      <FiExternalLink className={styles.linkIcon} />
                    </a>
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        );
      })}
    </motion.div>
  );
};

export default Timeline;
