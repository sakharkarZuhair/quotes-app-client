import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewBar from "./components/Navbar/NewNavBar";
import NewLoginScreen from "./components/LoginScreen/NewLoginDesign";
import NewHomeScreen from "./components/HomeScreen/NewHomeScreen";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NewBar />
        <Routes>
          <Route path="/home" element={<NewHomeScreen />} />
          <Route path="/" element={<NewLoginScreen />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
