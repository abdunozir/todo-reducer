import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoLists from "./components/TodoLists";

function App() {
  return (
    <div className="App">
      <h1>To-do</h1>
      <TodoForm />
      <TodoLists />
    </div>
  );
}

export default App;
