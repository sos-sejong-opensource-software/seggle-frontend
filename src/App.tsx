import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/molecules/Header';
import Contest from './pages/Contest';
import Class from './pages/Class';
import Board from './pages/Board';
import Announcements from './pages/Announcements';
import Faq from './pages/Faq';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/contest" element={<Contest />} />
        <Route path="/class" element={<Class />} />
        <Route path="/board" element={<Board />} />
        <Route path="/announcements" element={<Announcements />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
    </div>
  );
}

export default App;
