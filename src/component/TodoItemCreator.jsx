import React, { useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import todoListState from "../recoil/todoListState";

function TodoItemCreator() {
  const [inputValue, setInputValue] = useState("");
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
    ]);
    setInputValue("");
  };

  const onChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      console.log("# Enter");
      addItem();
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={onChange}
        onKeyDown={handleKeyDown}
      />
      <button onClick={addItem}>Add</button>
    </div>
  );
}

// 고유한 Id 생성을 위한 유틸리티
let id = 1;
function getId() {
  return id++;
}

export default TodoItemCreator;
