
import Footer from "./components/Footer/Footer";
import Services from "./pages/Services/Services";
import { AppHeader } from './common/components/AppHeader';
import Home from "./pages/Home";
import { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
       <Router>
        <Suspense>
        <AppHeader/> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services/>}/>
          </Routes>
          <Footer/>
          </Suspense>
        </Router>
    </div>
  );
}

export default App;