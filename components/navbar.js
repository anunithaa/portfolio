import Link from "next/link";
import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <img src="/logo.png" alt="Anunithaa Logo" />
      </div>
      <ul className={styles.navLinks}>
        <li>
          <Link href="#about">About</Link>
        </li>
        <li>
          <Link href="#projects">Projects</Link>
        </li>
        <li>
          <Link href="#experience">Activities</Link>
        </li>
        <li>
          <Link href="#skills">Skills</Link>
        </li>
        <li>
          <Link
            href="/AnunithaaEngineeringResume.docx"
            target="_blank"
            rel="noopener noreferrer"
          >
            <b>Resume</b>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
