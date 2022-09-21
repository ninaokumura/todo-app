import moon from "./assets/images/icon-moon.svg";

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="min-h-[12rem] border bg-mobile-light bg-cover bg-no-repeat sm:min-h-[20rem] sm:bg-desktop-light">
        <div className="center-element flex justify-between pt-12 sm:pt-20">
          <h1 className="text-3xl font-bold tracking-[0.3em] text-very-light-gray sm:text-4xl">
            TODO
          </h1>
          <img src={moon} alt="moon icon" className="h-6 w-6" />
        </div>
      </header>
      <main className="flex-1">
        <div className="center-element">Hello World</div>
      </main>
      <footer className="center-element">Made in nz</footer>
    </div>
  );
}

export default App;
