import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';

import { Login, Register, Faq } from '@/pages';
import { Announcement } from './pages/Announcement/Announcement';
import { MainHeader } from '@/components';
import { PATH } from '@/constants';

export default function App() {
  return (
    <>
      <MainHeader />
      <div className="container">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path={PATH.HOME} element={<Home />} />
            <Route path={PATH.LOGIN} element={<Login />} />
            <Route path={PATH.REGISTER} element={<Register />} />
            <Route path={PATH.COMPETITION_LIST} element={<div>CompetitionList</div>} />
            <Route path={PATH.CLASS_LIST} element={<div>ClassList</div>} />
            <Route path={PATH.BOARD_LIST} element={<div>BoardList</div>} />
            <Route path={PATH.ANNOUNCEMENT_LIST} element={<div>AnnouncementList</div>} />
            <Route path={PATH.FAQ} element={<Faq />} />

            <Route path="*" element={<div>Not Found</div>} />
          </Routes>
        </Suspense>
      </div>
    </>
  );
}
