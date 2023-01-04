import styles from "./styles.module.scss";

export function Banner() {
  return (
    <header className={styles.banner}>
      <img src="/src/assets/banner.png" alt="Banner da página do organo" />
    </header>
  );
}
