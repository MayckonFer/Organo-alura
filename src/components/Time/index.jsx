import { Contributor } from "../Contributor";
import styles from "./styles.module.scss";

export function Time(props) {
  const bgColor = { backgroundColor: props.colorSecondary };
  const borderTitle = { borderColor: props.colorPrimary };

  const id = Math.random();

  return (
    props.contributor.length > 0 && (
      <section className={styles.time} style={bgColor}>
        <h3 style={borderTitle}>{props.name}</h3>
        <div className={styles.contributor}>
          {props.contributor.map((contributor) => (
            <Contributor
              backgroundColor={props.colorPrimary}
              key={id}
              name={contributor.name}
              office={contributor.office}
              image={contributor.image}
            />
          ))}
        </div>
      </section>
    )
  );
}
