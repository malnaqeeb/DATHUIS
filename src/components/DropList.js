import React from "react";
import { DropListWrapper, ListItem } from "./StyledElements";
import { v4 as uuidv4 } from "uuid";

const DropList = ({ list, setInput }) => (
  <DropListWrapper>
    {list.length ? (
      list.map((item) => (
        <ListItem key={uuidv4()} onClick={() => setInput(item.name)}>
          {item.name}
        </ListItem>
      ))
    ) : (
      <ListItem>There is no match</ListItem>
    )}
  </DropListWrapper>
);

export default DropList;
