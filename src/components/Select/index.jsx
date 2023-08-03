import styles from "./style.module.scss"

export const Select = ({label, name, id, value}) => {
  return (
    <div className={styles.selectBox}>
      <label htmlFor={id}>{label}</label>
      <select id={id} name={name} value={value}>
        <option value="Entrada">Entrada</option>
        <option value="Saída">Saída</option>
      </select>
    </div>
  );
};
