const TodoData = (props) => {
  const { todoList, deleteTodo } = props;

  const handleClick = (id) => {
    deleteTodo(id);
  };
  return (
    <div className="todo-data">
      {todoList.map((item, index) => {
        return (
          <div className={`todo-item`} key={item.id}>
            {item.name}
            <button
              onClick={() => handleClick(item.id)}
              style={{ cursor: "pointer" }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default TodoData;
