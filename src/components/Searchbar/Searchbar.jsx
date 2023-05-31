import { useState } from 'react';
import { SearchButton, SearchInput } from './Searchbar.styled';

const Searchbar = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = e => {
    setSearchQuery(e.target.value);
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    onSubmit(searchQuery);
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <SearchInput
        type="text"
        name="searchQuery"
        autoFocus
        placeholder="Search a movie by name"
        onChange={handleChange}
        value={searchQuery}
        required
      />
      <SearchButton type="submit">Search</SearchButton>
    </form>
  );
};

export default Searchbar;
