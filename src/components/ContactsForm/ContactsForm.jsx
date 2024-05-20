import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import css from "../ContactsForm/ContactsForm.module.css";

import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";

const phoneRegex = RegExp(/^\d{3}-\d{2}-\d{2}$/);

const UserSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short")
    .max(50, "Too large")
    .required("required"),
  phone: Yup.string()
    .matches(phoneRegex, "Nummer format: 000-00-00")
    .required("required"),
});

export default function ContactForm() {
  const dispatch = useDispatch();

  const nameFieldId = useId();
  const phoneFieldId = useId();

  // Початкове значення полів форми
  const initialValues = {
    name: "",
    phone: "",
  };

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={UserSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <div className={css.container}>
          <label htmlFor={nameFieldId}>Name</label>
          <Field className={css.input} name="name" />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>
        <div className={css.container}>
          <label htmlFor={phoneFieldId}>Phone number</label>
          <Field className={css.input} type="tel" name="phone" />
          <ErrorMessage className={css.error} name="phone" component="span" />
        </div>
        <div className={css.containerButton}>
          <button className={css.button} type="submit">
            Add contact
          </button>
        </div>
      </Form>
    </Formik>
  );
}
