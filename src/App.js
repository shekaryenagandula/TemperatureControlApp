import { useState } from "react";
import "./styles.css";

export default function App() {
  const [temp, setTemp] = useState(25);
  const [alert, setAlert] = useState("");
  const handleIncreament = () => {
    if (temp <= 27) {
      setTemp(temp + 1);
      setAlert("");
    } else {
      setAlert("Max. temp limit reached");
    }
  };
  const handleDecreament = () => {
    if (temp >= 12) {
      setTemp(temp - 1);
      setAlert("");
    } else {
      setAlert("Min. temp limit reached");
    }
  };
  let colorView;
  temp > 24 ? (colorView = "#F15412") : (colorView = "#C4D7E0");

  return (
    <div className="app-container">
      <div className="temp-container" style={{ backgroundColor: colorView }}>
        <h1 className="display-temp">{temp}°C</h1>
      </div>
      <div className="button-group">
        <button className="ac-control" onClick={handleIncreament}>
          +
        </button>
        <button className="ac-control" onClick={handleDecreament}>
          -
        </button>
      </div>
      <h1>{alert}</h1>
    </div>
  );
}
