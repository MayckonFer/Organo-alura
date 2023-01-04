import styles from "./styles.module.scss";

export function TextField(props) {
  const placeholderModified = `${props.placeholder}...`;

  function handleChange(event) {
    props.change(event.target.value);
  }

  return (
    <div className={styles.textField}>
      <label>{props.label}</label>
      <input
        value={props.value}
        onChange={handleChange}
        required={props.required}
        placeholder={placeholderModified}
      />
    </div>
  );
}
