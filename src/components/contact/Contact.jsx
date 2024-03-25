import css from "./Contact.module.css";

const Contact = ({ contact , onDeleteContact}) => {

  return (
    <li className={css.item}>
      <div className={css.contactData}>
       
        <p>👤 {contact.name}</p>
       
        <p>📞 {contact.number}</p>
      </div>
      <button
        className={css.deleteContactBtn}
        type="button"
        onClick={() => onDeleteContact(contact.id)}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
