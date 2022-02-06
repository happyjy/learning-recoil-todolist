import { atom } from "recoil";

const todoListState = atom({
  key: "todoListState",
  default: [{ id: 0, text: "abc", isComplete: true }],
});

export default todoListState;
