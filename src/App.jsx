import { Suspense } from "react";
import "./App.css";
import Players from "./Players/Players";

const playersPromise = fetch("/public/players.json").then((res) => res.json());

function App() {
  return (
    <>
      <Suspense
        fallback={
          <div className="flex justify-center text-white mt-20 h-[100vh]">
            <span className="loading  loading-dots w-20"></span>
          </div>
        }
      >
        <Players playersPromise={playersPromise} />
      </Suspense>
    </>
  );
}

export default App;
