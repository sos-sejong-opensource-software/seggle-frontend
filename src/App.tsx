import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';

import { Login, Register, Faq, Admin, ClassList, Class, ClassProblemList } from '@/pages';
import { MainHeader } from '@/components';
import { AdminAllProblems } from './pages/Admin';
import { PATH, SUB_PATH } from '@/constants';

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
            <Route path={PATH.CLASS_LIST} element={<ClassList />} />
            <Route path={PATH.CLASS_DETAIL} element={<Class />}>
              <Route path={SUB_PATH.ALL_PROBLEMS} element={<ClassProblemList />} />
            </Route>
            <Route path={PATH.BOARD_LIST} element={<div>BoardList</div>} />
            <Route path={PATH.ANNOUNCEMENT_LIST} element={<div>AnnouncementList</div>} />
            <Route path={PATH.FAQ} element={<Faq />} />
            <Route path={PATH.ADMIN} element={<Admin />}>
              <Route path={PATH.ADMIN_ALL_PROBLEMS} element={<AdminAllProblems />} />
              <Route path={PATH.ADMIN_ALL_CLASSES} element={<div>AllClasses</div>} />
              <Route path={PATH.ADMIN_ANNOUNCEMENTS} element={<div>Announcements</div>} />
              <Route path={PATH.ADMIN_FAQS} element={<div>FAQs</div>} />
              <Route path={PATH.ADMIN_USER_MANAGEMENT} element={<div>UserManagement</div>} />
            </Route>

            <Route path="*" element={<div>Not Found</div>} />
          </Routes>
        </Suspense>
      </div>
    </>
  );
}
