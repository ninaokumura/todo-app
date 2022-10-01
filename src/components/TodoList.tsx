import { KeyboardEvent, SyntheticEvent, ChangeEvent } from "react";
import { useState } from "react";
import { clsx } from "clsx";
import Checkbox from "./Checkbox";
import { TodoItem, TodoStatus } from "../App";

type Props = {
  todos: TodoItem[];
  onTodosChange: (todos: TodoItem[]) => void;
};

type FilterKind = TodoStatus | "all";

const TodoList = (props: Props) => {
  const [filter, setFilter] = useState<FilterKind>("all");

  return (
    <>
      <ul className="sm:center-element divide-y overflow-hidden rounded-md bg-very-light-gray shadow-xl">
        {props.todos
          .filter(todo => {
            if (filter === "all") {
              return true;
            }
            return todo.status === filter;
          })

          .map(todo => (
            <li key={todo.id} className="relative h-14 text-sm">
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
        <li className="relative h-14">
          <div className="flex h-full items-center justify-between px-4 font-josefina-sans text-sm font-semibold text-dark-grayish-blue opacity-[0.8]">
            {`${
              props.todos.filter(todo => todo.status === "pending").length
            } items left`}

            {/* // filter todo */}
            <div className="hidden gap-4 font-bold sm:flex">
              <button onClick={() => setFilter("all")}>All</button>
              <button onClick={() => setFilter("pending")}>Active</button>
              <button onClick={() => setFilter("completed")}>Completed</button>
            </div>

            {/* //clear checkbox or mark all checkbox */}
            <div className="flex gap-4">
              <button>Clear completed</button>
            </div>
          </div>
        </li>
      </ul>
      <div className="relative mt-6 flex h-14 items-center justify-center gap-4 rounded-md bg-white px-4 font-josefina-sans text-sm font-semibold text-dark-grayish-blue opacity-[0.8] shadow-xl sm:hidden">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("pending")}>Active</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
      </div>
    </>
  );
};

export default TodoList;
