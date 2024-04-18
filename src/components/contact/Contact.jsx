import { deleteContact } from "../../reducs/contactsSlice";
import { useDispatch } from "react-redux";
import css from "./Contact.module.css";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const onDeleteContact = (userId) => {
    dispatch(deleteContact(userId));
  };

  return (
    <li className={css.item}>
      <div className={css.contactData}>
        <p>👤 {name}</p>
        <p>📞 {number}</p>
      </div>
      <button
        className={css.deleteContactBtn}
        type="button"
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
