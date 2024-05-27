import { useState } from "react";
import "./App.css";
import CurrencyDropdown from "./components/CurrencyDropdown";
import MyContext from "./contexts/CurrencyContext";

function App() {
  const [count, setCount] = useState(0);

  const [currencyTo, setCurrencyTo] = useState();
  const [currencyFrom, setCurrencyFrom] = useState();

  return (
    <MyContext.Provider
      value={{
        currencyTo,
        setCurrencyTo,
        currencyFrom,
        setCurrencyFrom,
      }}
    >
      <h1>Currency Converter Title</h1>
      <CurrencyDropdown />
    </MyContext.Provider>
  );
}

export default App;
