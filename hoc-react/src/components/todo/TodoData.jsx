const TodoData = (props) => {
  const { todoList } = props;
  console.log("Check:", todoList);
  return (
    <div className="todo-data">
      {todoList.map((item, index) => {
        return (
          <div className="todo-item">
            {item.name}
            <button>Delete</button>
          </div>
        );
      })}
      <div>{JSON.stringify(props.todoList)}</div>
    </div>
  );
};
export default TodoData;
