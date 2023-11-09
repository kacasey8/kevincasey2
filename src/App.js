import "./App.css";
import Redirector from "./components/Redirector";
import Home from "./pages/Home";

function App() {
  if (window.location.pathname === "/ccfciv-redirect") {
    return <Redirector />;
  }
  return <Home />;
}

export default App;
