import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import ContactForm from "./components/contactForm/ContactForm";
import SearchBox from "./components/searchBox/SearchBox";
import ContactList from "./components/contactList/ContactList";
import ContactListData from "./components/contact/ContactListData.json";

function App() {
  const [contacts, setContacts] = useState(() => {
    const stringifiedContacts = localStorage.getItem("listData");
    if(!stringifiedContacts) return ContactListData
    const parsedContacts = JSON.parse(stringifiedContacts);
    return parsedContacts;
  });
  const [search, setSearch] = useState("");
  const onAddContact = (formData) => {
    const finalContact = {
      ...formData,
      id: nanoid(),
    };
    setContacts((prevState) => [...prevState, finalContact]);
  };
  const onDeleteContact = (contactId) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== contactId)
    );
  };

  const onChangeSearch= (evt) => {
    setSearch(evt.target.value);
  };
  const searchContacts = contacts.filter((contact) =>
    {return contact.name.toLowerCase().includes(search.toLowerCase())}
  );
  useEffect(() => {
    localStorage.setItem("listData", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm 
      onAddContact={onAddContact} />
      <SearchBox 
      search={search} 
      onChange={onChangeSearch} 
      />
      <ContactList 
      contacts={searchContacts} 
      onDeleteContact={onDeleteContact} />
    </div>
  );
}

export default App;
