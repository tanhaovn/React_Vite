import "./components/todo/todo.css";
import TodoData from "./components/todo/TodoData";
import TodoNew from "./components/todo/todoNew";
import reactLogo from "./assets/react.svg";
import { useState } from "react";
import Header from "./layout/header";
import Footer from "./layout/footer";

const App = () => {
  const [todoList, setTodoList] = useState([
    // {
    //   id: 1,
    //   name: "Learning React",
    // },
    // {
    //   id: 2,
    //   name: "Watching Youtube",
    // },
  ]);

  const addNewTodo = (name) => {
    const newTodo = {
      id: randomIntFromInterval(1, 1000000),
      name: name,
    };
    setTodoList([...todoList, newTodo]);
  };

  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  const deleteTodo = (id) => {
    const newTodo = todoList.filter((item) => item.id !== id);
    setTodoList(newTodo);
  };
  return (
    <>
      <Header />
      <div className="todo-container">
        <div className="todo-title">Todo List</div>
        <TodoNew addNewTodo={addNewTodo} />

        {todoList.length > 0 ? (
          <TodoData todoList={todoList} deleteTodo={deleteTodo} />
        ) : (
          <div className="todo-image">
            <img src={reactLogo} className="logo" alt="React Logo" />
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default App;
