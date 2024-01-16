import React from "react";
import MainDesktop from "./components/desktop/MainDesktop";
import MainPage from "./pages/MainPage";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ChatGPT from "./pages/ChatGPT";
import SantaGPT from "./pages/SantaGPT";

function App() {
  
  
  
  return (
    <div className="App">
      <div className="wrapper">
      <Router>
        <MainDesktop />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/chatGPT" element={<ChatGPT />} />
            <Route path="/santaGPT" element={<SantaGPT />} />
          </Routes>
      </Router>
      </div>
    </div>
  );
}

export default App;
