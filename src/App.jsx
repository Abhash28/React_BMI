// src/App.js
import { useRef, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [bmi, setBmi] = useState();
  const [remark, setRemark] = useState("");

  const heightRef = useRef();
  const weightRef = useRef();

  const handleCalculate = () => {
    const height = parseFloat(heightRef.current.value);
    const weight = parseFloat(weightRef.current.value);

    if (!height || !weight || height <= 0 || weight <= 0) {
      alert("Please enter valid positive numbers for height and weight.");
      return;
    }

    const bmiValue = (weight / (height / 100) ** 2).toFixed(1);
    setBmi(bmiValue);

    if (bmiValue < 18.5) {
      setRemark("Underweight");
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      setRemark("Normal weight");
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      setRemark("Overweight");
    } else {
      setRemark("Obese");
    }
  };

  return (
    <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center bmi-bg">
      <div
        className="card p-4 shadow"
        style={{ maxWidth: "400px", width: "100%" }}
      >
        <h3 className="text-center text-primary mb-4">BMI Calculator</h3>

        <div className="form-group mb-3">
          <label htmlFor="height">Height (cm)</label>
          <input
            type="number"
            className="form-control"
            id="height"
            ref={heightRef}
            placeholder="Enter your height"
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="weight">Weight (kg)</label>
          <input
            type="number"
            className="form-control"
            id="weight"
            ref={weightRef}
            placeholder="Enter your weight"
          />
        </div>

        <button className="btn btn-primary w-100" onClick={handleCalculate}>
          Calculate BMI
        </button>

        {bmi && (
          <div className="alert alert-info mt-4 text-center">
            <h5>
              Your BMI: <span className="text-dark">{bmi}</span>
            </h5>
            <p className="mb-0">
              Category: <strong>{remark}</strong>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
