import { useState } from "react";

import "./styles.css";

/*
 *   Modify the component to query the api as the user types.
 *   Display the results as `${title} - ${author}`
 *   Query URL `https://gutendex.com/books/?search=${query}`
 *   Update __tests__/App.tests.js
 *
 */

const App = () => {
  const [query, setQuery] = useState("");
  return (
    <div className="box">
      <label htmlFor="query">Search</label>
      <input
        id="query"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};

export default App;
