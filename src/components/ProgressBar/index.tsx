import { useEffect, useState } from "react"
import { useTodoContext } from "../../contexts/todo"
import { Container, Bar, Text } from "./styles"

export const ProgressBar = () => {
  const { listActive } = useTodoContext()

  const [todosDone, setTodosDone] = useState<number>(0)
  const [todosTotal, setTodosTotal] = useState<number>(0)

  useEffect(() => {
    if (!listActive) {
      return
    }

    setTodosDone(listActive.todos.filter(todo => todo.completed).length)
    setTodosTotal(listActive.todos.length)
  }, [listActive])

  return (
    <Container>
      <Text>{todosDone}/{todosTotal}</Text>
      <Bar className="progress-bar-done" style={{ width: `${todosDone / todosTotal * 100}%` }}></Bar>
    </Container>
  )
}