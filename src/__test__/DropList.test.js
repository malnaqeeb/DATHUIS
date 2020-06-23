import React from "react";
import { render } from "@testing-library/react";
import DropList from "../components/DropList";
import data from "../MOCK_DATA.json";


it("render drop list correctly", () => {
  render(<DropList list={data} setInput=" " />);
});
