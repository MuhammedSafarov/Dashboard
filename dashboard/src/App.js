import "./App.css";
import Sidebar from "./layout/Sidebar/Sidebar";
import HomePage from "./pages/homePage/HomePage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Sidebar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path='/forecast' element={<} /> */}
        </Routes>
        {/* <Sidebar />
        <HomePage /> */}
      </div>
    </div>
  );
}

export default App;
