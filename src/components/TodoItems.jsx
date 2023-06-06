import styles from "@/styles/TodoItem.module.css";
import { AiFillEdit } from "react-icons/ai";
import { FaTrash } from "react-icons/fa";
import { useState, useRef } from "react";

const TodoItem = ({ itemProp, handleChange, delTodo, setUpdate }) => {
  const [editing, setEditing] = useState(false);
  const [updateInput, setUpdateInput] = useState(itemProp.title);
  const editInputRef = useRef(null);

  let viewMode = {};
  let editMode = {};

  if (editing) {
    viewMode.display = "none";
  } else {
    editMode.display = "none";
  }

  const handleEditing = () => {
    setEditing(true);
  };

  const handleUpdatedDone = (event) => {
    if (event.key === "Enter") {
      setUpdate(editInputRef.current.value, itemProp.id);
      setEditing(false);
    }
  };

  const completedStyle = {
    fontStyle: "italic",
    color: "#595959",
    opacity: 0.4,
    textDecoration: "line-through",
  };

  return (
    <li className={styles.item}>
      <div className={styles.content} style={viewMode}>
        <input
          type="checkbox"
          checked={itemProp.completed}
          onChange={() => handleChange(itemProp.id)}
          className={styles}
        />

        <button onClick={handleEditing}>
          <AiFillEdit style={{ color: "#5e5e5e", fontSize: "16px" }} />
        </button>

        <button onClick={() => delTodo(itemProp.id)}>
          <FaTrash style={{ color: "5e5e5e", fontSize: "20px" }} />
        </button>

        <span style={itemProp.completed ? completedStyle : null}>
          {itemProp.title}
        </span>
      </div>

      <input
        type="text"
        ref={editInputRef}
        value={updateInput}
        className={styles.textInput}
        style={editMode}
        onChange={(e) => setUpdateInput(e.target.value)}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  );
};
export default TodoItem;
