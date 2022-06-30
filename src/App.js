import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PBay from "./pages/Projects/PBay";
import TradingPlatform from "./pages/Projects/TradingPlatform";
import VideoMemories from "./pages/Projects/VideoMemories";
import WebChat from "./pages/Projects/WebChat";
import StockAPI from "./pages/Projects/StockAPI";
import Portfolio from "./pages/Projects/Portfolio";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/PBay" element={<PBay />} />
          <Route path="/TradingPlatform" element={<TradingPlatform />} />
          <Route path="/VideoMemories" element={<VideoMemories />} />
          <Route path="/WebChat" element={<WebChat />} />
          <Route path="/StockAPI" element={<StockAPI />} />
          <Route path="/Portfolio" element={<Portfolio />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
