// // import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
import { Home } from './pages/Home';
import { AppHeader } from './common/components/AppHeader';

function App() {
  return (
    <div className="App">
      <Router>
        <Suspense>
          <AppHeader />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;