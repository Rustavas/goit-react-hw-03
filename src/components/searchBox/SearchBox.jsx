import css from "./SearchBox.module.css";

const SearchBox = ({search, onChange}) => {
  return (
    <section>
      <span>Find contacts by name</span>
      <br />
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={onChange}
      />
    </section>
  );
};

export default SearchBox;
