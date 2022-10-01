import { KeyboardEvent, SyntheticEvent, ChangeEvent, useState } from "react";
import moon from "./assets/images/icon-moon.svg";
import Checkbox from "./components/Checkbox";
import Input from "./components/Input";
import TodoList from "./components/TodoList";

export type TodoStatus = "completed" | "pending";

export type TodoItem = {
  text: string;
  id: string;
  status: TodoStatus;
};

function App() {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [newTodo, setNewTodo] = useState("");
  const [checkedAll, setCheckedAll] = useState(false);

  // function that returns next id
  const getNextTodoId = () => {
    return String(todos.length + 1);
  };

  // track todo input value
  const handleChangeTodo = (evt: SyntheticEvent<HTMLInputElement>) => {
    setNewTodo(evt.currentTarget.value);
  };

  // add todos
  const handleAddTodo = (evt: KeyboardEvent<HTMLInputElement>) => {
    if (evt.key === "Enter") {
      setTodos([
        ...todos,
        {
          text: newTodo,
          id: getNextTodoId(),
          status: "pending",
        },
      ]);
      setNewTodo("");
    }
  };

  // Toggle all checkboxex
  const handleToggleAll = (evt: ChangeEvent<HTMLInputElement>) => {
    const nextStatus: TodoStatus = evt.target.checked ? "completed" : "pending";
    const nextTodos = todos.map(todo => {
      return { ...todo, status: nextStatus };
    });
    setTodos(nextTodos);
    setCheckedAll(evt.target.checked);
  };

  return (
    <div className="flex min-h-screen flex-col bg-very-light-gray font-josefina-sans">
      <header className="relative min-h-[12rem] bg-mobile-light bg-cover bg-no-repeat sm:min-h-[20rem] sm:bg-desktop-light">
        <div className="center-element flex justify-between pt-12 sm:pt-20">
          <h1 className="text-3xl font-bold tracking-[0.3em] text-very-light-gray sm:text-4xl">
            TODO
          </h1>
          <button>
            <img src={moon} alt="moon icon" className="h-6 w-6" />
          </button>
        </div>
      </header>
      <main className="flex-1">
        {/* Enter todo */}
        <div className="absolute top-24 right-0 left-0 mx-auto px-3 sm:top-56">
          <div className="center-element relative h-14 overflow-hidden rounded-md bg-white text-sm">
            <Input
              onKeyDown={handleAddTodo}
              placeholder="Create a new todo..."
              onChange={handleChangeTodo}
              value={newTodo}
              name="todo"
              className="absolute inset-0 pl-10"
            />

            <Checkbox
              checked={checkedAll}
              onChange={handleToggleAll}
              className="absolute bottom-0 left-3 top-0 my-auto h-6 w-6"
              id="checkbox"
              name="checkbox"
            />
          </div>
        </div>

        {/* render todos with onKeyDown */}
        <div className="absolute top-40 right-0 left-0 mx-auto px-3 sm:top-72">
          {todos.length > 0 && (
            <TodoList todos={todos} onTodosChange={setTodos} />
          )}
        </div>
      </main>
      {/* <footer className="center-element flex-1">Made in nz</footer> */}
    </div>
  );
}

export default App;
