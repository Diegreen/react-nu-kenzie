import { Input } from "../input/input"
import styles from "../../styles/form.scss"
import { Select } from "../Select"

export const FormSection = () => {
    return (

    <section className="formSec">
        <form>
            <div>
             <Input label="Descrição" type="text" placeholder="Digite Aqui sua descrição" name="descripition" />
             <p>Ex: Compra de roupas</p>
            </div>
            <div>
                <Input label="Valor (R$)" type="text" name="value" placeholder="1" />
                <Select label="Tipo de Valor" id="select" />
            </div>
            <button>Inserir valor</button>
        </form>
        <div className="totalValue">
            <h3 className="title tree">Valor total: <span>R$ 00,00</span></h3>
            <p>O valor se refere ao saldo</p>
        </div>
    </section>
    )
}