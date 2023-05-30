const TodoItem = (props) => {
  const { itemProp } = props;
  return <li>{itemProp.title}</li>;
};
export default TodoItem;
