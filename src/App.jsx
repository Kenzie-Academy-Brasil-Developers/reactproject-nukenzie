import { useState } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";

const App = () => {
  const [auth, setAuth] = useState(true);
  const pageRedirect = () => setAuth(!auth);

  return (
    <div className="App">
      {auth ? (
        <Home pageRedirect={pageRedirect} />
      ) : (
        <Dashboard pageRedirect={pageRedirect} />
      )}
    </div>
  );
};

export default App;
