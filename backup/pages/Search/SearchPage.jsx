import React from "react";
import { useState, useEffect } from "react";

export default function SearchPage() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("All time rander");
  useEffect(() => {
    console.log("One time rander");
  }, []);
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5)
      console.log("Search for", keyword);
  }, [keyword]);
  return (
    <div>
      <h1>Search Bar Test</h1>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}
