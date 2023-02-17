import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';

import { Announcement } from './pages/Announcement';
import { AnnouncementDetail } from './pages/Announcement/AnnouncementDetail';

import {
  Login,
  Register,
  Resign,
  Faq,
  Board,
  BoardDetail,
  NewBoard,
  BoardEdit,
  Admin,
  AdminAnnouncementList,
  AdminClassList,
  AdminProblemList,
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
  ContestProblemCreate,
  ProblemEdit,
  ClassContestListEdit,
  AdminFaqList,
  AdminNewFaq,
  AdminEditFaq,
  AdminUserList,
  ClassListEdit,
  AdminProblemDetail,
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
            <Route path={PATH.REGISTER} element={<Resign />} />
            <Route path={PATH.RESET_PASSWORD} element={<ResetPassword />} />
            <Route path={PATH.COMPETITION_LIST} element={<div>CompetitionList</div>} />

            <Route path={`${PATH.CLASS_DETAIL}/*`} element={<Class />}>
              <Route path={SUB_PATH.ALL_PROBLEMS} element={<ClassProblemList />} />
              <Route path={SUB_PATH.STUDENT_MANAGEMENT} element={<ClassStudentManagement />} />
              <Route path={SUB_PATH.CONTEST} element={<ClassContest />}>
                <Route path={SUB_PATH.CONTEST_LIST_EDIT} element={<ClassContestListEdit />} />
                <Route path={SUB_PATH.CONTEST_DETAIL} element={<ClassContestProblemList />} />
                <Route path={SUB_PATH.CONTEST_PROBLEM} element={<ContestProblemDetail />}>
                  <Route path={SUB_PATH.DESCRIPTION} element={<ProblemDescription />} />
                  <Route path={SUB_PATH.DATA} element={<ProblemData />} />
                  <Route path={SUB_PATH.LEADERBOARD} element={<ProblemLeaderBoard />} />
                  <Route path={SUB_PATH.SUBMISSON} element={<ProblemSubmission />} />
                </Route>
                <Route path={SUB_PATH.PROBLEM_CREATE} element={<ContestProblemCreate />} />
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
            <Route path={PATH.CLASS_LIST} element={<ClassList />} />
            <Route path={PATH.CLASS_LIST_EDIT} element={<ClassListEdit />} />

            <Route path={PATH.BOARD_LIST} element={<Board />} />
            <Route path={PATH.BOARD_DETAIL} element={<BoardDetail />} />
            <Route path={PATH.BOARD_CREATE} element={<NewBoard />} />
            <Route path={PATH.BOARD_EDIT} element={<BoardEdit />} />
            <Route path={PATH.ANNOUNCEMENT_LIST} element={<Announcement />} />
            <Route path={PATH.ANNOUNCEMENT_DETAIL} element={<AnnouncementDetail />} />
            <Route path={PATH.FAQ} element={<Faq />} />
            <Route path={PATH.ADMIN} element={<Admin />}>
              <Route path={PATH.ADMIN_PROBLEM_LIST} element={<AdminProblemList />} />
              <Route path={PATH.ADMIN_PROBLEM_DETAIL} element={<AdminProblemDetail />}>
                <Route path={SUB_PATH.DESCRIPTION} element={<ProblemDescription />} />
                <Route path={SUB_PATH.DATA} element={<ProblemData />} />
              </Route>
              <Route path={PATH.ADMIN_CLASS_LIST} element={<AdminClassList />} />

              <Route path={PATH.ADMIN_ANNOUNCEMENT_NEW} element={<AdminNewAnnouncement />} />
              <Route path={PATH.ADMIN_ANNOUNCEMENT_EDIT} element={<AdminEditAnnouncement />} />
              <Route path={PATH.ADMIN_ANNOUNCEMENT_LIST} element={<AdminAnnouncementList />} />

              <Route path={PATH.ADMIN_FAQ_NEW} element={<AdminNewFaq />} />
              <Route path={PATH.ADMIN_FAQ_EDIT} element={<AdminEditFaq />} />
              <Route path={PATH.ADMIN_FAQ_LIST} element={<AdminFaqList />} />
              <Route path={PATH.ADMIN_USER_LIST} element={<AdminUserList />} />
            </Route>

            <Route path="*" element={<div>Not Found</div>} />
          </Routes>
        </Suspense>
      </div>
    </>
  );
}
