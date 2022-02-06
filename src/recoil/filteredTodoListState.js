import { selector } from "recoil";
import todoListFilterState from "./todoListFilterState";
import todoListState from "./todoListState";

/* 
  # EXPLANATION
    * 내부적으로 2개의 의존성 todoListFilterState와 todoListState을 추적
    * 그래서 둘 중 하나라도 변하면 filteredTodoListState는 재실행된다.
    * selectors가 변경되면 컴포넌트들도 다시 렌더링된다.
*/
const filteredTodoListState = selector({
  key: "filteredTodoListState",
  get: ({ get }) => {
    // point: get 함수에 state를 인자값으로 받아 반환 된 값을 사용한다.
    const filter = get(todoListFilterState);
    const list = get(todoListState);
    console.log({ filter, todoListFilterState });

    switch (filter) {
      case "Show Completed":
        return list.filter((item) => item.isComplete);
      case "Show Uncompleted":
        return list.filter((item) => !item.isComplete);
      default:
        return list;
    }
  },
});

export default filteredTodoListState;
