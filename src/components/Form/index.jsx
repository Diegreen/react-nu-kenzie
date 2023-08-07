import { Input } from "../input/input"
import styles from "../../styles/form.scss"
import { Select } from "../Select"
import { useEffect, useState } from "react"

export const FormSection = ({ addNote, noteList }) => {

    const [title, setTitle] = useState("")
    const [value, setValue] = useState("")
    const [selector, setSelector] = useState("")
    const [totalValue, setTotalValue] = useState(0)
    const [titleError, setTitleError] = useState(false);
    const [valueError, setValueError] = useState(false);
    const [selectorError, setSelectorError] = useState(false);

    const resetValues = (event) => {
        event.preventDefault()

        if (!title || !value || !selector) {
            setTitleError(!title);
            setValueError(!value);
            setSelectorError(!selector);
            return;
          }
      
          setTitleError(false);
          setValueError(false);
          setSelectorError(false);
      
      
        addNote({title, value, selector})
    }

    useEffect(() => {
        const total = noteList.reduce((acc, note) => acc + parseFloat(note.value), 0);
        setTotalValue(total);
      }, [noteList]);

      const formatCurrency = (value) => {
        return parseFloat(value).toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        });
      };

    return (
    <section className="formSec">
        <form onSubmit={resetValues}>
            <div>
             <Input label="Descrição" type="text" value={title} setValue={setTitle} placeholder="Digite Aqui sua descrição" name="descripition" required />
             {titleError && !title && <span className="error-message">Campo obrigatório</span>}
             <p>Ex: Compra de roupas</p>
            </div>
            <div>
                <Input label="Valor (R$)" type="text" name="value" value={value} setValue={setValue} placeholder="1" required />
                {valueError && !value && <span className="error-message">Campo obrigatório</span>}
                <Select value={selector} setValue={setSelector} label="Tipo de Valor" id="select" required/>
                {selectorError && !selector && <span className="error-message">Campo obrigatório</span>}
            </div>
            <button type="submit">Inserir valor</button>
        </form>
        <div className="totalValue">
            <h3 className="title tree">Valor total:<span>{formatCurrency(totalValue)}</span></h3>
            <p>O valor se refere ao saldo</p>
        </div>
    </section>
    )
}