import React, { useState, useEffect } from "react";
import InputField from "./InputField";
import DropList from "./DropList";
import data from "../MOCK_DATA.json";
import { Div } from "./StyledElements";

const SearchBar = () => {
  const [input, setInput] = useState("");
  const [openList, setOpenList] = useState(false);
  const [newList, setNewList] = useState(null);

  useEffect(() => {
    const names = data.filter(
      (item) => item.name && item.name.toLowerCase().includes(input)
    );
    setNewList(names);
  }, [input]);




  return (
    <Div>
      <InputField
        onBlur={() => {
          setTimeout(() => {
            setOpenList(false);
          }, 200);
        }}
        value={input}
        onFocus={() => setOpenList(true)}
        onChange={(e) => setInput(e.target.value)}
        label="Contact"
        placeholder="Type or search"
      />
      {openList && newList && (
        <DropList setInput={(name) => setInput(name)} list={newList} />
      )}
    </Div>
  );
};

export default SearchBar;
