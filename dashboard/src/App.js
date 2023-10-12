import "./App.css";
import Sidebar from "./layout/Sidebar/Sidebar";
import HomePage from "./pages/homePage/HomePage";
import { Route, Routes } from "react-router-dom";
import ForecastPage from "./pages/forecastPage/ForecastPage";
import AllOffices from "./pages/allOffices/AllOffices";
import Employees from "./pages/employees/Employees";
import CoopelPage from "./pages/coopelPage/CoopelPage";
import LosAngelesPage from "./pages/losAngelesPage/LosAngelesPage";

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
          <Route path="/coopel-office" element={<CoopelPage />} />
          <Route path="/losangeles-office" element={<LosAngelesPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
