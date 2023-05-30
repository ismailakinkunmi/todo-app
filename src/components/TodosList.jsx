import TodoItems from "@/components/TodoItems";

const TodosList = (props) => {
  const { todosProps } = props;

  return (
    <ul>
      {todosProps.map((todo) => (
        <TodoItems key={todo.id} itemProp={todo} />
      ))}
    </ul>
  );
};
export default TodosList;
