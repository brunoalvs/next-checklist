import { useTodoContext } from "../../contexts/todo";
import { ITodo } from "../../types/todo";
import { Container } from './styles'

interface TaskItemProps {
  task: ITodo
}

export const TaskItem = ({ task }: TaskItemProps) => {
  const { toggleTodo, listActive } = useTodoContext()

  const handleToggle = () => {
    console.log('toggle', task.id)
    toggleTodo(task.id, listActive.id)
  }

  return (
    <Container onClick={() => toggleTodo(task.id, listActive.id)} isChecked={task.completed}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => handleToggle()}
        id={task.id.toString()}
        name={task.title}
      />
      <label htmlFor={task.id.toString()}>{task.title}</label>
    </Container>
  )
}