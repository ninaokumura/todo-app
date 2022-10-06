import {
  ChangeEvent,
  KeyboardEvent,
  SyntheticEvent,
  useState,
  useEffect,
} from "react";
import Checkbox from "./components/Checkbox";
import Input from "./components/Input";
import TodoList from "./components/TodoList";
import ToggleDarkMode from "./components/ToggleDarkMode";
import tw from "tailwind-styled-components";

export type TodoStatus = "completed" | "pending";

export type TodoItem = {
  text: string;
  id: string;
  status: TodoStatus;
};

const Header = tw.header`
 relative min-h-[12rem] bg-mobile-light bg-cover bg-no-repeat  dark:bg-mobile-dark sm:min-h-[20rem] sm:bg-desktop-light dark:sm:bg-desktop-dark
`;

function App() {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [newTodo, setNewTodo] = useState("");
  const [checkedAll, setCheckedAll] = useState(false);

  // set item on local storage
  useEffect(() => {
    // convert to a string
    if (todos.length > 0) {
      window.localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);

  // get items on local storage
  useEffect(() => {
    const data = window.localStorage.getItem("todos");
    console.log(data);
    if (!data) {
      return;
    }
    // convert to object
    setTodos(JSON.parse(data));
  }, []);

  // function that returns next id
  const getNextTodoId = () => {
    const ids = todos.map(todo => Number(todo.id));
    const maxId = Math.max(...ids);
    return String(ids.length ? maxId + 1 : 1);
  };

  // track todo input value
  const handleChangeTodo = (evt: SyntheticEvent<HTMLInputElement>) => {
    setNewTodo(evt.currentTarget.value);
  };

  // add todos
  const handleAddTodo = (evt: KeyboardEvent<HTMLInputElement>) => {
    if (evt.key === "Enter") {
      const nextTodoID = getNextTodoId();
      console.log(nextTodoID);
      setTodos([
        ...todos,
        {
          text: newTodo,
          id: nextTodoID,
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
    <div className="flex min-h-screen flex-col bg-very-light-gray font-josefina-sans dark:bg-very-dark-blue">
      <Header>
        <div className="center-element flex justify-between pt-12 sm:pt-20">
          <h1 className="text-3xl font-bold tracking-[0.3em] text-very-light-gray sm:text-4xl">
            TODO
          </h1>
          <ToggleDarkMode />
        </div>
      </Header>
      <main className="flex-1">
        {/* Enter todo */}
        <div className="absolute top-24 right-0 left-0 mx-auto px-3 sm:top-56">
          <div className="center-element relative h-14 overflow-hidden rounded-md text-sm dark:text-dark-grayish-blue">
            <Input
              onKeyDown={handleAddTodo}
              placeholder="Create a new todo..."
              onChange={handleChangeTodo}
              value={newTodo}
              name="todo"
              className="pl-10' absolute inset-0"
            />

            <Checkbox
              checked={checkedAll}
              onChange={handleToggleAll}
              className="absolute bottom-0 left-3 top-0 my-auto h-6 w-6 border dark:bg-very-dark-desaturated-blue"
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
