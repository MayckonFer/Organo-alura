import styles from "./styles.module.scss";

export function ListSuspended(props) {
  return (
    <div className={styles.listSuspended}>
      <label>{props.label}</label>
      <select
        onChange={(event) => props.change(event.target.value)}
        required={props.required}
        value={props.value}
      >
        <option value=""></option>
        {props.itens.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
}
