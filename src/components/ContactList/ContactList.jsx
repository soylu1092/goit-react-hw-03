import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList({ contacts, onDelete }) {
  return (
    <ul className={css.list}>
      {contacts.map((c) => (
        <li key={c.id} className={css.item}>
          <Contact id={c.id} name={c.name} number={c.number} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}
