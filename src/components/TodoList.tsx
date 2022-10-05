import { clsx } from "clsx";
import { useState } from "react";
import tw from "tailwind-styled-components";
import { TodoItem } from "../App";
import closeIcon from "../assets/images/icon-cross.svg";
import Checkbox from "./Checkbox";
import FilterActions, { FilterKind } from "./FilterActions";

type Props = {
  todos: TodoItem[];
  onTodosChange: (todos: TodoItem[]) => void;
};

const DeleteButton = tw.button`
  absolute right-6 opacity-0 transition-opacity group-hover:opacity-100
`;

const RowContainer = tw.div`
  flex h-full items-center justify-between px-4 font-josefina-sans text-sm
  font-semibold text-dark-grayish-blue opacity-[0.8]
`;

const TodoList = (props: Props) => {
  const [filter, setFilter] = useState<FilterKind>("all");

  //Delete todos
  const handleDeleteTodo = (id: string) => {
    const nextTodos = props.todos.filter(todo => todo.id !== id);
    props.onTodosChange(nextTodos);
  };

  const handleClearCompleted = () => {
    const nextTodos = props.todos.filter(todo => todo.status !== "completed");
    props.onTodosChange(nextTodos);
  };

  return (
    <>
      <ul className="sm:center-element divide-y overflow-hidden rounded-md bg-very-light-gray shadow-xl dark:bg-very-dark-desaturated-blue dark:text-very-light-gray">
        {props.todos
          .filter(todo => {
            if (filter === "all") {
              return true;
            }
            return todo.status === filter;
          })

          .map(todo => (
            <li
              key={todo.id}
              className="group relative h-14 cursor-pointer text-sm"
            >
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
                  className="absolute bottom-0 left-3 top-0 my-auto h-6 w-6 "
                  id="checkbox"
                  name="checkbox"
                />

                <DeleteButton onClick={() => handleDeleteTodo(todo.id)}>
                  <img src={closeIcon} alt="close icon" className="h-3 w-3" />
                </DeleteButton>

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
          <RowContainer>
            {`${
              props.todos.filter(todo => todo.status === "pending").length
            } items left`}

            {/* // filter todo */}
            <div className="hidden gap-4 font-bold sm:flex">
              <FilterActions onChangeFilter={setFilter} />
            </div>

            {/* //clear checkbox or mark all checkbox */}
            <div className="flex gap-4">
              <button onClick={handleClearCompleted}>Clear completed</button>
            </div>
          </RowContainer>
        </li>
      </ul>

      <div className="relative mt-6 flex h-14 items-center justify-center gap-4 rounded-md bg-white px-4 font-josefina-sans text-sm font-semibold text-dark-grayish-blue opacity-[0.8] shadow-xl sm:hidden">
        <FilterActions onChangeFilter={setFilter} />
      </div>
    </>
  );
};

export default TodoList;
