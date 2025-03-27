import { useState } from "react";

const TodoNew = (props) => {
  // const valueInput = "Tấn Hào";
  const [valueInput, setValueInput] = useState("Tấn Hào");

  const { addNewTodo } = props;
  // addNewTodo("Tấn Hào");
  const handleClick = () => {
    console.log(valueInput);
  };
  const handleOnChange = (name) => {
    setValueInput(name);
  };
  return (
    <div className="todo-new">
      <input
        type="test"
        onChange={(event) => {
          handleOnChange(event.target.value);
        }}
      />
      <button style={{ cursor: "pointer" }} onClick={handleClick}>
        Add
      </button>
      <div>Tui là : {valueInput}</div>
    </div>
  );
};
export default TodoNew;
