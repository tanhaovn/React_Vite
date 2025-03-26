import "./components/todo/todo.css";
import TodoData from "./components/todo/TodoData";
import TodoNew from "./components/todo/todoNew";
import reactLogo from "./assets/react.svg";

const App = () => {
  const hoc_react = "Hào";
  const age = 19;
  const data = {
    address: "Khánh Hòa",
    country: "Việt Nam",
  };
  return (
    <>
      <div className="todo-container">
        <div className="todo-title">Todo List</div>
        <TodoNew />
        <TodoData name={hoc_react} age={age} data={data} />
        <div className="todo-image">
          <img src={reactLogo} className="logo" alt="React Logo" />
        </div>
      </div>
    </>
  );
};

export default App;
