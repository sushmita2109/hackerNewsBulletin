import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard } from './dashboard';
import Nav from './components/nav';
import Footer from './components/footer';
import { Jobs } from './components/jobs';

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Nav />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path='jobs' element={<Jobs />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
