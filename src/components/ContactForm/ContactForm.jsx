import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";

const schema = Yup.object({
  name: Yup.string().min(3, "Min 3 karakter").max(50, "Max 50 karakter").required("Zorunlu alan"),
  number: Yup.string().min(3, "Min 3 karakter").max(50, "Max 50 karakter").required("Zorunlu alan"),
});

const initialValues = { name: "", number: "" };

export default function ContactForm({ onAdd }) {
  return (
    <div className={css.card}>
      <Formik initialValues={initialValues} validationSchema={schema} onSubmit={onAdd}>
        <Form className={css.form} autoComplete="off">
          <label className={css.label}>
            Name
            <Field name="name" type="text" className={css.input} />
            <ErrorMessage name="name" component="span" className={css.error} />
          </label>

          <label className={css.label}>
            Number
            <Field name="number" type="text" className={css.input} />
            <ErrorMessage name="number" component="span" className={css.error} />
          </label>

          <button type="submit" className={css.button}>
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
}
