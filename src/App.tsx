import clsx from "clsx";
import { KeyboardEvent, SyntheticEvent, useState } from "react";
import moon from "./assets/images/icon-moon.svg";
import Checkbox from "./components/Checkbox";
import Input from "./components/Input";

type TodoStatus = "completed" | "pending";

type TodoItem = {
  text: string;
  id: string;
  status: TodoStatus;
};

function App() {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [newTodo, setNewTodo] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  // function that returns next id
  const getNextTodoId = () => {
    return String(todos.length + 1);
  };

  const handleTodo = (evt: SyntheticEvent<HTMLInputElement>) => {
    setNewTodo(evt.currentTarget.value);
  };

  const handleKeyEvt = (evt: KeyboardEvent<HTMLInputElement>) => {
    if (evt.key === "Enter") {
      setTodos([
        ...todos,
        { text: newTodo, id: getNextTodoId(), status: "pending" },
      ]);
      setNewTodo("");
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <header className="relative min-h-[12rem] border bg-mobile-light bg-cover bg-no-repeat sm:min-h-[20rem] sm:bg-desktop-light">
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
        <div className="absolute top-28 right-0 left-0 mx-auto px-3 sm:top-56">
          <div className="center-element relative h-14 rounded border bg-very-light-gray text-sm">
            <Input
              onKeyDown={handleKeyEvt}
              placeholder="Create a new todo..."
              onChange={handleTodo}
              value={newTodo}
              name="todo"
              className="absolute inset-0 pl-10"
            />
            <Checkbox
              checked={isChecked}
              onChange={() => {
                setIsChecked(!isChecked);
              }}
              className="absolute bottom-0 left-3 top-0 my-auto h-6 w-6"
              id="checkbox"
              name="checkbox"
              role="checkbox"
            />
          </div>
        </div>

        <div className="absolute top-28 right-0 left-0 mx-auto px-3 sm:top-72">
          {todos.length > 0 && (
            <ul className="center-element divide-y overflow-hidden rounded-md bg-very-light-gray shadow-lg">
              {todos.map(todo => (
                <li key={todo.id} className=" relative h-14 text-sm">
                  <div className="flex h-full items-center pl-7">
                    <Checkbox
                      checked={todo.status === "completed"}
                      onChange={() => {
                        const nextTodos = [...todos];
                        const idx = todos.findIndex(td => td.id === todo.id);
                        nextTodos[idx].status =
                          todo.status === "completed" ? "pending" : "completed";
                        setTodos(nextTodos);
                      }}
                      className="absolute bottom-0 left-3 top-0 my-auto h-6 w-6"
                      id="checkbox"
                      name="checkbox"
                      role="checkbox"
                    />
                    <span
                      className={clsx("", {
                        "line-through": todo.status === "completed",
                      })}
                    >
                      {todo.text}
                    </span>
                  </div>
                </li>
              ))}
              <li className="relative flex h-14 items-center justify-start border px-4 text-sm">
                <div>{`${todos.length} items left`}</div>
              </li>
            </ul>
          )}
        </div>
      </main>
      <footer className="center-element">Made in nz</footer>
    </div>
  );
}

export default App;
