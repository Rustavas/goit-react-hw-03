import * as Yup from "yup";
import { Field, Form, Formik } from 'formik';
import { ErrorMessage } from "formik";

import css from "./ContactForm.module.css";

const contactFormSchema = Yup.object({
name: Yup.string().required("Required").min(3, "Too Short!").max(50, "Too Long!").trim(),
number: Yup.string().required("Required").trim()
})

const ContactForm = ({ onAddContact }) => {
  const handleSubmit = (values, actions) => {
    onAddContact (values)
    actions.resetForm()
  };

  const FORM_INITIAL_VALUES = {name:"", number:"" }

  return (
    <Formik 
    initialValues={FORM_INITIAL_VALUES}
    validationSchema={contactFormSchema} 
    onSubmit={handleSubmit}>
    <Form className={css.form} >
      <label>
        <span>Name</span>
        <br />
        <Field
          className={css.input}
          type="text"
          name="name"
        />
        <ErrorMessage component="p" name="name" render={msg => <p className={css.error}>{msg}</p>}/>
      </label>
      <br />
      <label>
        <span>Number</span>
        <br />
        <Field
          className={css.input}
          type="number"
          name="number"
        />
        <ErrorMessage component="p" name="number" render={msg => <p className={css.error}>{msg}</p>}/>
      </label>
      <br />
      <button type="submit">Add contact</button>
    </Form>
    </Formik>
  );
};

export default ContactForm;
