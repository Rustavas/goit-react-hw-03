import ContactList from "./components/contactList/ContactList";
import ContactForm from "./components/contactForm/ContactForm";
import SearchBox from "./components/searchBox/SearchBox"

function App() {
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </>
  );
}

export default App;