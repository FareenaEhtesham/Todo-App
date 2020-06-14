import React from 'react'


const Search = props => {
    return (
      <input
        type="search"
        placeholder="Search the students"
        onChange={props.changing}
      />
    );
  };
  
  export default Search;
  