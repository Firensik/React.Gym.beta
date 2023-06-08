import "./App.css";
import { useState } from "react";

function App() {
  const exportWeight = {
    25: {
      label: "25kg",
      quantity: 0,
    },
    20: {
      label: "20kg",
      quantity: 0,
    },
    15: {
      label: "15kg",
      quantity: 0,
    },
    10: {
      label: "10kg",
      quantity: 0,
    },
    5: {
      label: "5kg",
      quantity: 0,
    },
    2.5: {
      label: "2.5kg",
      quantity: 0,
    },
    1.25: {
      label: "1.25kg",
      quantity: 0,
    },
  };

  const result = {
    25: {
      plates: 0,
    },
    20: {
      plates: 0,
    },
    15: {
      plates: 0,
    },
    10: {
      plates: 0,
    },
    5: {
      plates: 0,
    },
    2.5: {
      plates: 0,
    },
    1.25: {
      plates: 0,
    },
  };

  const [weight, setWeight] = useState(exportWeight);
  const [results, setResults] = useState(result);
  const [total, setTotal] = useState(0);

  const clearInput = () => {
    setWeight(exportWeight);
    setTotal(0);
  };

  const handleQuantity = (e) => {
    const { name, value } = e.target;

    setWeight((prevState) => ({
      ...prevState,
      [name]: { ...prevState[name], quantity: +value },
    }));
  };
  let newTotal = total;

  const Mathematic = () => {
    const calculatorWeight = (plateWeight, quantity, left) => {
      const plateAmount = 2;
      const actualWeight = plateWeight * plateAmount;

      if (newTotal >= actualWeight && weight[plateWeight].quantity > quantity) {
        results[plateWeight].plates = results[plateWeight].plates + plateAmount;
        newTotal = left - actualWeight;
        // setResults(results[plateWeight].plates);
        setTotal(newTotal);
        console.log(newTotal + " newtotal");
        console.log(results);
        return calculatorWeight(plateWeight, quantity + plateAmount, newTotal);
      }

      return;
    };
    for (let [key, value] of Object.entries(weight)) {
      if (newTotal === 0) {
        continue;
      }
      calculatorWeight(key, 0, newTotal);
    }
  };

  return (
    <div className="App">
      <form className="form">
        <h1 className="Name">Gym Calculator</h1>
        <h2>Aby podnieść {total} potrzebujesz:</h2>

        <div>
          {Object.entries(results).map(([weight, value]) => {
            return (
              <div key={weight}>
                {weight}kg - Plates: {value.plates}
              </div>
            );
          })}
        </div>

        <div className="Input-weight">
          <h2>Podaj ilość talerzy na siłowni:</h2>
          <input
            value={total}
            onChange={(e) => setTotal(e.target.value)}
            type="number"
          />
          <label>Ilosc</label>
          <input
            name="25"
            value={weight[25].quantity}
            onChange={handleQuantity}
            type="number"
          />
          <input
            name="20"
            value={weight[20].quantity}
            onChange={handleQuantity}
            type="number"
          />
          <input
            name="15"
            value={weight[15].quantity}
            onChange={handleQuantity}
            type="number"
          />
          <input
            name="10"
            value={weight[10].quantity}
            onChange={handleQuantity}
            type="number"
          />
          <input
            name="5"
            value={weight[5].quantity}
            onChange={handleQuantity}
            type="number"
          />
          <input
            name="2.5"
            value={weight[2.5].quantity}
            onChange={handleQuantity}
            type="number"
          />
          <input
            name="1.25"
            value={weight[1.25].quantity}
            onChange={handleQuantity}
            type="number"
          />
        </div>
      </form>
      <button className="Button-cal" onClick={Mathematic}>
        Oblicz
      </button>
      <button className="Button-clear" onClick={clearInput}>
        Wyczyść
      </button>
    </div>
  );
}

export default App;
