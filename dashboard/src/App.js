import "./App.css";
import Sidebar from "./layout/Sidebar/Sidebar";
import HomePage from "./pages/homePage/HomePage";
import { Route, Routes } from "react-router-dom";
import Header from "./layout/Header/Header";
import ForecastPage from "./pages/forecastPage/ForecastPage";
import AllOffices from "./pages/allOffices/AllOffices";
import Employees from "./pages/employees/Employees";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/forecast" element={<ForecastPage />} />
          <Route path="/all-offices" element={<AllOffices />} />
          <Route path="/employees" element={<Employees />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
