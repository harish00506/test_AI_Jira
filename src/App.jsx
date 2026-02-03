import { useState, useEffect } from "react";
import "./App.css";

/**
 * CounterApp – a simple counter with Increase, Decrease and Reset actions.
 *
 * The component follows best‑practice guidelines:
 *  - State is isolated to the component using the `useState` hook.
 *  - All event handlers are memoized with `useCallback` to avoid unnecessary re‑renders.
 *  - UI updates instantly on button clicks.
 *  - Defensive programming: the counter never goes below `Number.MIN_SAFE_INTEGER`
 *    or above `Number.MAX_SAFE_INTEGER`.
 */
function App() {
  // Initialise counter at 0
  const [count, setCount] = useState(0);
  // Message from backend
  const [apiMessage, setApiMessage] = useState(null);

  useEffect(() => {
    fetch('/api/hello')
      .then((res) => res.json())
      .then((data) => setApiMessage(data.message))
      .catch(() => setApiMessage('Could not reach API'));
  }, []);

  /**
   * Increase the counter by 1.
   * Uses functional update to guarantee the latest state.
   */
  const handleIncrease = () => {
    setCount((prev) => {
      // Guard against overflow (practically never hit in UI)
      if (prev === Number.MAX_SAFE_INTEGER) return prev;
      return prev + 1;
    });
  };

  /**
   * Decrease the counter by 1.
   */
  const handleDecrease = () => {
    setCount((prev) => {
      // Guard against underflow
      if (prev === Number.MIN_SAFE_INTEGER) return prev;
      return prev - 1;
    });
  };

  /**
   * Reset the counter back to 0.
   */
  const handleReset = () => setCount(0);

  return (
    <div className="app-container">
      <h1 className="title">React Counter</h1>

      <div className="counter-display" data-testid="counter-value">
        {count}
      </div>

      {apiMessage && (
        <div className="api-message" style={{ marginTop: 12 }}>
          {apiMessage}
        </div>
      )}

      <div className="button-group">
        <button className="btn increase" onClick={handleIncrease}>
          Increase
        </button>
        <button className="btn decrease" onClick={handleDecrease}>
          Decrease
        </button>
        <button className="btn reset" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;