import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SearchBar.css';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const onhandleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted with search term:', searchTerm);

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm(''); // Clear the input after navigating
    }
  };

  return (
    <form onSubmit={onhandleSubmit} className="search-bar-container">
      <input
        className="search-bar"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => {
          console.log('Input value changed to:', e.target.value);
          setSearchTerm(e.target.value);
        }}
      />
      <button type="submit" className="search-button">
        <span className="search-icon"></span>
      </button>
    </form>
  );
};

export default SearchBar;