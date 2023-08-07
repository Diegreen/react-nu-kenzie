export const FinanceCard = ({ title, value, id, selector, removeNote }) => {
  return (
    <li className="list">
      <div>
        <h3 className="title tree">{title}</h3>
        <p>R$ {value}</p>
      </div>
      <div>
        <p>{selector}</p>
        <button onClick={() => removeNote(id)}>Excluir</button>
      </div>
    </li>
  );
};
