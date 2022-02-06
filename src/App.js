import { RecoilRoot } from "recoil";
import TodoList from "./component/TodoList";

function App() {
  return (
    <RecoilRoot>
      <TodoList />
    </RecoilRoot>
  );
}

export default App;
