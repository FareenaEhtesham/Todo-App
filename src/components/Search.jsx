import React from 'react'


const Search = props => {
    return (
      <input
        type="search"
        placeholder="Search languages"
        onChange={props.changing}
      />
    );
  };
  
  export default Search;
  