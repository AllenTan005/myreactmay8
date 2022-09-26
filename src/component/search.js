import React from "react";

const Search = ({ search, setInput }) => {
  const setHandler = (e) => {
    setInput(e.target.value);
  };
  return (
    <div className="search">
      <input onChange={setHandler} type="text" />
      <button onClick={search}>search</button>
    </div>
  );
};

export default Search;
