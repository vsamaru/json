import React, { useState, useCallback } from "react";

const debounce = function(fn, delay) {
  let timeoutId;
  return (...args) => {
    if (!!timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
};

const Search = ({ value, onChange }) => {
  const [text, setText] = useState(value);
  const update = useCallback(debounce(onChange, 300), [onChange]);
  const handleChange = ({ target: { value } }) => {
    setText(value);
    update(value);
  };

  return (
    <div>
      <input defaultValue={text} onChange={handleChange} />
    </div>
  );
};

export default Search;
