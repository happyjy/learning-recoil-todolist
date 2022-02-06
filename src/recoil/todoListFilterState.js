import { atom } from "recoil";

/* 
  * todoListFilterState value: 
    - Show All
    - Show Completed
    - Show Uncompleted
*/
const todoListFilterState = atom({
  key: "todoListFilterState",
  default: "Show All",
});

export default todoListFilterState;
