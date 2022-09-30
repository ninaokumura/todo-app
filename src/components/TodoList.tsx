import { clsx } from "clsx";
import Checkbox from "./Checkbox";
import { TodoItem } from "../App";

type Props = {
  todos: TodoItem[];
  onTodosChange: (todos: TodoItem[]) => void;
};

const TodoList = (props: Props) => {
  return (
    <ul className="sm:center-element divide-y overflow-hidden rounded-md bg-very-light-gray shadow-lg">
      {props.todos.map(todo => (
        <li key={todo.id} className=" relative h-14 text-sm">
          <div className="flex h-full items-center pl-7">
            <Checkbox
              checked={todo.status === "completed"}
              onChange={() => {
                const nextTodos = [...props.todos];
                const idx = props.todos.findIndex(td => td.id === todo.id);
                nextTodos[idx].status =
                  todo.status === "completed" ? "pending" : "completed";
                props.onTodosChange(nextTodos);
              }}
              className="absolute bottom-0 left-3 top-0 my-auto h-6 w-6"
              id="checkbox"
              name="checkbox"
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

      {/* container footer */}
      <li className="relative flex h-14 items-center justify-between border px-4 text-sm">
        <div>{`${props.todos.length} items left`}</div>
        <div className="flex gap-4">
          <button>All</button>
          <button>Active</button>
          <button>Completed</button>
        </div>
        <div className="flex gap-4">
          <button>Clear</button>
          <button>Completed</button>
        </div>
      </li>
    </ul>
  );
};

export default TodoList;
