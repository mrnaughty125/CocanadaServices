import Footer from "./components/Footer/Footer";
import Services from "./pages/Services/Services";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
       <Router>
          <Routes>
            <Route path="/" element={<Services />} />
            <Route path="/footer" element={<Footer />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
