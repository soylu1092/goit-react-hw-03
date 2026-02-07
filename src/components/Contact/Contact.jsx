import css from "./Contact.module.css";

const UserIcon = () => (
  <svg className={css.icon} viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm0 2c-4.42 0-8 2.24-8 5v1h16v-1c0-2.76-3.58-5-8-5Z"
      fill="currentColor"
    />
  </svg>
);

const PhoneIcon = () => (
  <svg className={css.icon} viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.07 21 3 13.93 3 5a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.24 1.01l-2.21 2.2Z"
      fill="currentColor"
    />
  </svg>
);

export default function Contact({ id, name, number, onDelete }) {
  return (
    <div className={css.card}>
      <div className={css.info}>
        <p className={css.row}>
          <UserIcon />
          <span>{name}</span>
        </p>
        <p className={css.row}>
          <PhoneIcon />
          <span>{number}</span>
        </p>
      </div>

      <button type="button" className={css.button} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}
