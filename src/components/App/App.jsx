import { useEffect, useMemo, useState } from "react";
import { nanoid } from "nanoid";

import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";

import css from "./App.module.css";

const LS_KEY = "contacts";

const initialContacts = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

function loadContacts() {
  try {
    const saved = localStorage.getItem(LS_KEY);
    if (!saved) return initialContacts;
    const parsed = JSON.parse(saved);
    return Array.isArray(parsed) ? parsed : initialContacts;
  } catch {
    return initialContacts;
  }
}

export default function App() {
  const [contacts, setContacts] = useState(loadContacts);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const visibleContacts = useMemo(() => {
    const normalized = filter.trim().toLowerCase();
    if (!normalized) return contacts;

    return contacts.filter((c) => c.name.toLowerCase().includes(normalized));
  }, [contacts, filter]);

  const handleAddContact = (values, actions) => {
    const name = values.name.trim();
    const number = values.number.trim();

    const exists = contacts.some(
      (c) => c.name.trim().toLowerCase() === name.toLowerCase()
    );

    if (exists) {
      actions.setFieldError("name", "Bu isim zaten kayıtlı.");
      return;
    }

    const newContact = { id: nanoid(), name, number };
    setContacts((prev) => [newContact, ...prev]);
    actions.resetForm();
  };

  const handleDeleteContact = (id) => {
    setContacts((prev) => prev.filter((c) => c.id !== id));
  };

  return (
    <div className={css.wrapper}>
      <h1 className={css.title}>Phonebook</h1>

      <ContactForm onAdd={handleAddContact} />

      <SearchBox value={filter} onChange={setFilter} />

      <ContactList contacts={visibleContacts} onDelete={handleDeleteContact} />
    </div>
  );
}
