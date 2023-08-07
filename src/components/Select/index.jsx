import styles from "./style.module.scss";

export const Select = ({ label, name, id, value, setValue }) => {


  return (
    <div className={styles.selectBox}>
      <label htmlFor={id}>{label}</label>
      <select
        id={id}
        name={name}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      >
        <option value="">Selecione uma opção...</option>
        <option value="Entrada">Entrada</option>
        <option value="Saída">Saída</option>
      </select>
    </div>
  );
};
