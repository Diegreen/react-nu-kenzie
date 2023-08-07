import { useState } from "react";
import { FinanceCard } from "./Finance-Card";

export const FinanceList = ({ noteList, removeNote }) => {
  return (
    <section className="financeSection">
      <h3 className="title tree">Resumo financeiro</h3>
      <ul className="title two">
        {noteList.map((note) => (
          <FinanceCard
            id={note.id}
            removeNote={removeNote}
            key={note.id}
            title={note.title}
            value={note.value}
            selector={note.selector}
          />
        ))}
      </ul>
    </section>
  );
};
