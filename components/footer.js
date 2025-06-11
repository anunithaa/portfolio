import styles from "./footer.module.css";

export default function Footer() {
  return (
    <>
      <hr className={styles.hr} />
      <footer className={styles.footer}>
        <p>
          © {new Date().getFullYear()} Anunithaa Rajakumaresan. All rights
          reserved.
        </p>
      </footer>
    </>
  );
}
