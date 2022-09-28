import { SyntheticEvent, useState } from "react";
import moon from "./assets/images/icon-moon.svg";
import Checkbox from "./components/Checkbox";
import Input from "./components/Input";

function App() {
  const [todo, setTodo] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleTodo = (evt: SyntheticEvent<HTMLInputElement>) => {
    setTodo(evt.currentTarget.value);
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
          <div className="center-element relative h-12 rounded border bg-very-light-gray text-sm">
            <Input
              placeholder="Create a new todo..."
              onChange={handleTodo}
              value={todo}
              name="todo"
              className="absolute inset-0 pl-10"
            />
            <Checkbox
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
              className="absolute bottom-0 left-3 top-0 my-auto h-6 w-6"
              id="checkbox"
              name="checkbox"
              role="checkbox"
            />
          </div>
        </div>
      </main>
      <footer className="center-element">Made in nz</footer>
    </div>
  );
}

export default App;
