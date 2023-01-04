//import { FC } from 'react';
import Header from './components/molecules/Header';

import Contest from './components/pages/Contest';
import Class from './components/pages/Class';
import Board from './components/pages/Board';
import Announcements from './components/pages/Announcements';
import Faq from './components/pages/Faq';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
      {/* Routes : 각각의 페이지를 스위치하는 역할 */}
      <Header />
      <Routes>
        <Route path="/contest" element={<Contest />} />
        <Route path="/class" element={<Class />} />
        <Route path="/board" element={<Board />} />
        <Route path="/announcements" element={<Announcements />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
    </>
  );
}

export default App;
