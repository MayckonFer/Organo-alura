import styles from "./styles.module.scss";

export function Contributor({ name, image, office, backgroundColor }) {
  const bgColorHeaderCard = { backgroundColor: backgroundColor };

  return (
    <div className={styles.contributor}>
      <div className={styles.header} style={bgColorHeaderCard}>
        <img src={image} alt={name} />
      </div>
      <div className={styles.footer}>
        <h4>{name}</h4>
        <h5>{office}</h5>
      </div>
    </div>
  );
}
