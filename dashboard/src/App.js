import "./App.css";
import Sidebar from "./layout/Sidebar/Sidebar";
import HomePage from "./pages/homePage/HomePage";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Sidebar />
        <HomePage />
      </div>
    </div>
  );
}

export default App;
