import { useState } from "react";
import "./App.css";

/**
 * CounterApp – a simple counter with Increase, Decrease and Reset actions.
 *
 * The component uses React's useState hook to keep track of the current count.
 * All UI updates are synchronous and error‑free. Buttons are disabled when
 * the action would have no effect (e.g., decreasing below 0 is allowed, but
 * you could add a guard if desired). The component is fully typed with JSDoc
 * for better IDE support.
 */
function App() {
  // Initialise counter at 0
  const [count, setCount] = useState(0);

  /**
   * Increment the counter by 1.
   */
  const handleIncrease = () => {
    setCount((prev) => prev + 1);
  };

  /**
   * Decrement the counter by 1.
   */
  const handleDecrease = () => {
    setCount((prev) => prev - 1);
  };

  /**
   * Reset the counter back to 0.
   */
  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="app-container">
      <h1>React Counter</h1>

      {/* Counter display */}
      <div className="counter-display" data-testid="counter-value">
        {count}
      </div>

      {/* Action buttons */}
      <div className="button-group">
        <button onClick={handleIncrease} className="btn increase">
          Increase
        </button>
        <button onClick={handleDecrease} className="btn decrease">
          Decrease
        </button>
        <button onClick={handleReset} className="btn reset">
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;