import styles from "./style.module.scss";

export const Input = ({id, label, placeholder, type, name, value, setValue,}) => {
  return (
    <div className={styles.inputBox}>
      <label htmlFor={id}>{label}</label>
      <input
        placeholder={placeholder}
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    </div>
  );
};
