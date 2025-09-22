import { Suspense, useState } from "react";
import "./App.css";
import Players from "./Players/Players";
import Navbar from "./Navbar/Navbar";
import Toggle from "./Toggle/Toggle";
import Selected from "./Selected/Selected";
import { ToastContainer } from "react-toastify";
import Banner from "./Banner/Banner";
import Footer from "./Footer/Footer";

const playersPromise = fetch("players.json").then((res) => res.json());

function App() {
  const [balance, setBalance] = useState(50000000);
  const [selected, setSelected] = useState([]);
  const [isAvailable, setIsAvailable] = useState(true);
  return (
    <>
      <Navbar balance={balance} />
      <Banner />

      <Toggle
        selected={selected}
        isAvailable={isAvailable}
        setIsAvailable={setIsAvailable}
      />

      <Suspense
        fallback={
          <div className="flex justify-center text-white mt-20">
            <span className="loading  loading-dots w-20"></span>
          </div>
        }
      >
        <Players
          className={isAvailable ? "" : "hidden"}
          playersPromise={playersPromise}
          balance={balance}
          setBalance={setBalance}
          selected={selected}
          setSelected={setSelected}
        />
      </Suspense>
      <Selected
        className={isAvailable ? "hidden" : ""}
        selected={selected}
        setSelected={setSelected}
        balance={balance}
        setBalance={setBalance}
      />

      <Footer />

      <ToastContainer />
    </>
  );
}

export default App;
