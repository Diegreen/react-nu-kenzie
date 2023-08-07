import { useState } from "react";
import { FinanceList } from "../../components/Finance-List";
import { FormSection } from "../../components/Form";
import styles from "./style.module.scss";
import { v4 as uuidv4 } from "uuid";

export const FinAndFormSection = () => {
  const [noteList, setNoteList] = useState([]);

  const addNote = (formData) => {
    const newNote = { ...formData, id: uuidv4() };
    setNoteList((prevNoteList) => [newNote, ...prevNoteList]);
  };

  const removeNote = (removeId) => {
    const newNotelist = noteList.filter((note) => note.id !== removeId);
    setNoteList(newNotelist);
  };

  return (
    <section className={styles.sectionBox}>
      <FormSection addNote={addNote} noteList={noteList} />
      <FinanceList noteList={noteList} removeNote={removeNote} />
    </section>
  );
};
