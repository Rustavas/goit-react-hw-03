import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { Field, Form, Formik } from 'formik';
import { ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import { useId } from "react";
 
import { addContact } from "../../reducs/contactsSlice";

import css from "./ContactForm.module.css";

const contactFormSchema = Yup.object({
name: Yup.string().required("Required").min(3, "Too Short!").max(50, "Too Long!").trim(),
number: Yup.string().required("Required").trim()
})
const FORM_INITIAL_VALUES = {name:"", number:"" }

const ContactForm = () => {
  const dispatch = useDispatch();
  const nameId = useId();
  const numberId = useId();

  const addNewContact = (formData) => {
    const finalContact = {
      ...formData,
      id: nanoid(),
    };
    dispatch(addContact(finalContact))
  };
  const handleSubmit = (values, actions) => {
    addNewContact(values);
    actions.resetForm();
  };


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



