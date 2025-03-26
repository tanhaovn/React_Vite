const TodoNew = (props) => {
  console.log(props);
  const { addNewTodo } = props;
  // addNewTodo("Tấn Hào");
  const handleClick = () => {
    alert("click me");
  };
  const handleOnChange = (name) => {
    console.log("Bạn là ai sau này", name);
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
    </div>
  );
};
export default TodoNew;
