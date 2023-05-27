import React from "react";

import Header from "@/components/Header";
import TodosLogic from "@/components/TodosLogic";

function TodoApp() {
  return (
    <React.Fragment>
      <Header />
      <TodosLogic />
    </React.Fragment>
  );
}

export default TodoApp;
