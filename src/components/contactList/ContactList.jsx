import { useSelector } from "react-redux";

import { selectContacts } from "../../reducs/contactsSlice";
import { selectNameFilter } from "../../reducs/filtersSlice";
import Contact from "../contact/Contact";

import css from "./ContactList.module.css";


const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  const filteredContacts = contacts.filter(
    (contact) => contact.name.toLowerCase().includes(filter.toLowerCase()) 
  );
  return (
    <ul className={css.list}>
      {filteredContacts.map((contact) => {
        return (
          <Contact
            key={contact.id}
            name={contact.name}
            number={contact.number}
            id={contact.id}
          />
        );
      })}
    </ul>
  );
};

export default ContactList;

