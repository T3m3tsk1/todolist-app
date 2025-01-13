import TodoList from "./components/TodoList"
import TodoInput from "./components/TodoInput"

function App() {
  let todos = [
    "Go to the gym",
    "Eat more protein",
    "Learn to code"
  ]

  return (
    <>
      <TodoInput />
      <TodoList todos={todos} />
    </>
  )
}

export default App
