import './App.css';
import { Routes, Route } from 'react-router-dom';

import { Navbar } from "./components/Navbar";
import Home from './pages/Home'
import Anime from './pages/Anime'

function App() {
  return (
    <div>
      <Navbar toggle={false} />
      <div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/anime/:id" element={<Anime/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
