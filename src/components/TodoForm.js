import styled from "styled-components";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useContext, useRef, useState } from "react";
import useTodo from "../Store/ShopContext";

function TodoForm() {
  let { AddToList } = useTodo();
  let [inputval, setInputVal] = useState("");
  let addList = () => {
    if (inputval.length > 0) {
      AddToList(inputval);
    }
    setInputVal("");
  };
  return (
    <TodoFormWraper>
      <TextField
        onChange={(e) => setInputVal(e.target.value)}
        id="standard-basic"
        label="Standard"
        value={inputval}
        variant="standard"
      />
      <Button onClick={addList} variant="contained">
        Contained
      </Button>
    </TodoFormWraper>
  );
}

let TodoFormWraper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin: 20px auto;
`;

export default TodoForm;
