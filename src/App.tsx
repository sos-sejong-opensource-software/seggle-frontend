import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';

import { Login, Register, Faq } from '@/pages';
import { Announcement } from "./pages/Announcement/Announcement";
import { Board } from "./pages/Board/Board";

import { MainHeader } from '@/components';
import { PATH } from '@/constants';

export default function App() {
  return (
    <>
      <MainHeader />
      <Routes>
        <Route path={PATH.HOME} element={<Home />} />
        <Route path={PATH.LOGIN} element={<Login />} />
        <Route path={PATH.REGISTER} element={<Register />} />
        <Route path={PATH.COMPETITION_LIST} element={<div>CompetitionList</div>} />
        <Route path={PATH.CLASS_LIST} element={<div>ClassList</div>} />
        <Route path={PATH.ANNOUNCEMENT_LIST} element={<Announcement />} />
        <Route path={PATH.BOARD_LIST} element={<Board />} />
        <Route path={PATH.FAQ} element={<Faq />} />

        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </>
  );
}
