import { useState, useCallback } from "react";
import "./App.css";

/**
 * CounterApp – a simple counter with Increase, Decrease and Reset actions.
 *
 * The component follows the acceptance criteria:
 *  - Displays the current counter value.
 *  - Increase button increments by 1.
 *  - Decrease button decrements by 1.
 *  - Reset button sets the counter back to 0.
 *
 * All UI updates happen instantly thanks to React state.
 */
function App() {
  // Initialise counter at 0. Guard against unexpected non‑numeric values.
  const [count, setCount] = useState(() => {
    const initial = 0;
    if (typeof initial !== "number") {
      console.error("Initial counter value is not a number. Falling back to 0.");
      return 0;
    }
    return initial;
  });

  // Increment handler – wrapped in useCallback to avoid unnecessary re‑renders.
  const handleIncrease = useCallback(() => {
    setCount((prev) => {
      const next = prev + 1;
      console.debug(`Counter increased: ${prev} → ${next}`);
      return next;
    });
  }, []);

  // Decrement handler.
  const handleDecrease = useCallback(() => {
    setCount((prev) => {
      const next = prev - 1;
      console.debug(`Counter decreased: ${prev} → ${next}`);
      return next;
    });
  }, []);

  // Reset handler.
  const handleReset = useCallback(() => {
    console.debug(`Counter reset from ${count} to 0`);
    setCount(0);
  }, [count]);

  return (
    <div className="app-container">
      <h1>React Counter</h1>
      <div className="counter-display" data-testid="counter-value">
        {count}
      </div>
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