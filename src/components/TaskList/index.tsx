import { useEffect, useState } from "react";
import { useTodoContext } from "../../contexts/todo";
import { ITodo } from "../../types/todo";
import { ProgressBar } from "../ProgressBar";
import { TaskItem } from "../TaskItem";

import { Container } from "./styles";

export const TaskList = () => {

  const { listActive } = useTodoContext()

  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    if (!listActive) {
      return
    }

    setTodos(listActive.todos);
  }, [listActive]);

  if (todos.length === 0 || !todos) {
    return (
      <Container>
        <p>No tasks found. Please create a new task.</p>
      </Container>
    );
  }

  return (
    <Container>
      <ProgressBar />
      {todos.map(todo => (
        <TaskItem key={todo.id} task={todo} />
      ))}
    </Container>
  );
}