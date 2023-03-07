import "./App.css";

import { useState } from "react";

function App() {
  const [bill, setBill] = useState<number>(0);
  const [people, setPeople] = useState<number>(0);
  const [tip, setTip] = useState(0);
  const countTip = () => {
    setTip(0.05);
  };

  const tipAmount = ((bill * tip) / people).toFixed(2);
  const tolalPerPerson = ((bill * (1 + tip)) / people).toFixed(2);

  const showTip = !(tipAmount === "NaN" || tipAmount === "infinity");
  const showTotalPerPerson = !(
    tolalPerPerson === "NaN" || tolalPerPerson === "infinity"
  );

  return (
    <div className="App">
      <h1 className="mainTitle">Calculate Tip amount</h1>
      <div className="container">
        Bill amount
        <input
          className="input"
          placeholder="bill"
          type="number"
          value={bill}
          min={0}
          onKeyDown={(e) => {
            if (e.key === ".") {
              e.preventDefault();
            }
          }}
          onChange={(e) => {
            setBill(e.target.valueAsNumber);
          }}
        />
        <div className="buttonDiv">
          <button className="button" onClick={countTip}>
            5 %
          </button>
          <button
            className="button"
            onClick={() => {
              setTip(0.1);
            }}
          >
            10 %
          </button>
          <button
            className="button"
            onClick={() => {
              setTip(0.15);
            }}
          >
            15 %
          </button>
          <button
            className="button"
            onClick={() => {
              setTip(0.5);
            }}
          >
            50 %
          </button>
        </div>
        Number of people
        <input
          placeholder="number of people"
          className="input"
          type="number"
          value={people}
          min={0}
          onChange={(e) => {
            setPeople(e.target.valueAsNumber);
          }}
        />
        <div>tip amount / person {showTip ? tipAmount : "0.00"}</div>
        <div>
          total amount / person {showTotalPerPerson ? tolalPerPerson : "0.00"}
        </div>
      </div>
    </div>
  );
}

export default App;
