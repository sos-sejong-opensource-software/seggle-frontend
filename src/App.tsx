import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';

import {
  Login,
  Register,
  UserHome,
  Faq,
  Admin,
  AdminAnnouncementList,
  AdminAllClasses,
  AdminAllProblems,
  ClassList,
  Class,
  ClassProblemList,
  ClassContest,
  ClassContestProblemList,
  ClassStudentManagement,
  AdminNewAnnouncement,
  AdminEditAnnouncement,
  AllProblemDetail,
  ContestProblemDetail,
  ProblemDescription,
  ProblemData,
  ProblemLeaderBoard,
  ProblemSubmission,
  ProblemCreate,
  ProblemEdit,
  ClassEditContestList,
  AdminFaqList,
  AdminNewFaq,
  AdminEditFaq,
} from '@/pages';
import { MainHeader } from '@/components';
import ResetPassword from './pages/User/ResetPassword';
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
            <Route path={PATH.USER_HOME} element={<UserHome />} />
            <Route path={PATH.RESET_PASSWORD} element={<ResetPassword />} />
            <Route path={PATH.COMPETITION_LIST} element={<div>CompetitionList</div>} />
            <Route path={`${PATH.CLASS_DETAIL}/*`} element={<Class />}>
              <Route path={SUB_PATH.ALL_PROBLEMS} element={<ClassProblemList />} />
              <Route path={SUB_PATH.STUDENT_MANAGEMENT} element={<ClassStudentManagement />} />
              <Route path={SUB_PATH.CONTEST} element={<ClassContest />}>
                <Route path={SUB_PATH.CONTEST_LIST_EDIT} element={<ClassEditContestList />} />
                <Route path={SUB_PATH.CONTEST_DETAIL} element={<ClassContestProblemList />} />
                <Route path={SUB_PATH.CONTEST_PROBLEM} element={<ContestProblemDetail />}>
                  <Route path={SUB_PATH.DESCRIPTION} element={<ProblemDescription />} />
                  <Route path={SUB_PATH.DATA} element={<ProblemData />} />
                  <Route path={SUB_PATH.LEADERBOARD} element={<ProblemLeaderBoard />} />
                  <Route path={SUB_PATH.SUBMISSON} element={<ProblemSubmission />} />
                </Route>
                <Route path={SUB_PATH.PROBLEM_CREATE} element={<ProblemCreate />} />
                <Route path={SUB_PATH.PROBLEM_EDIT_LIST} element={<ClassProblemList />} />
                <Route path={SUB_PATH.PROBLEM_EDIT} element={<ProblemEdit />} />
                <Route path={SUB_PATH.CONTEST_PROBLEM_EDIT} element={<ProblemEdit />} />
              </Route>
              <Route path={SUB_PATH.PROBLEM} element={<AllProblemDetail />}>
                <Route path={SUB_PATH.DESCRIPTION} element={<ProblemDescription />} />
                <Route path={SUB_PATH.DATA} element={<ProblemData />} />
                <Route path={SUB_PATH.LEADERBOARD} element={<ProblemLeaderBoard />} />
                <Route path={SUB_PATH.SUBMISSON} element={<ProblemSubmission />} />
              </Route>
            </Route>
            <Route path={PATH.CLASS_LIST} element={<ClassList />}></Route>
            <Route path={PATH.BOARD_LIST} element={<div>BoardList</div>} />
            <Route path={PATH.ANNOUNCEMENT_LIST} element={<div>AnnouncementList</div>} />
            <Route path={PATH.FAQ} element={<Faq />} />
            <Route path={PATH.ADMIN} element={<Admin />}>
              <Route path={PATH.ADMIN_ALL_PROBLEMS} element={<AdminAllProblems />} />
              <Route path={PATH.ADMIN_ALL_CLASSES} element={<AdminAllClasses />} />

              <Route path={PATH.ADMIN_ANNOUNCEMENTS_NEW} element={<AdminNewAnnouncement />} />
              <Route path={PATH.ADMIN_ANNOUNCEMENTS_EDIT} element={<AdminEditAnnouncement />} />
              <Route path={PATH.ADMIN_ANNOUNCEMENTS} element={<AdminAnnouncementList />} />

              <Route path={PATH.ADMIN_FAQS_NEW} element={<AdminNewFaq />} />
              <Route path={PATH.ADMIN_FAQS_EDIT} element={<AdminEditFaq />} />
              <Route path={PATH.ADMIN_FAQS} element={<AdminFaqList />} />
              <Route path={PATH.ADMIN_USER_MANAGEMENT} element={<div>UserManagement</div>} />
            </Route>

            <Route path="*" element={<div>Not Found</div>} />
          </Routes>
        </Suspense>
      </div>
    </>
  );
}
