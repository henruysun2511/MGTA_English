import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";
import UserLayout from "../layouts/UserLayout";
import AccountMana from "../pages/admin/AccountMana";
import AsignmentMana from "../pages/admin/AsignmentMana";
import AsignmentDetailMana from "../pages/admin/AsignmentMana/AsignmentDetailMana";
import BlogMana from "../pages/admin/BlogMana";
import Overview from "../pages/admin/Overview";
import StudyScheduleMana from "../pages/admin/StudyScheduleMana";
import AboutUs from "../pages/client/AboutUs";
import AsignmentDetail from "../pages/client/AsignmentDetail";
import Blog from "../pages/client/Blog";
import Curriculum from "../pages/client/Curriculum";
import Feedback from "../pages/client/Feedback";
import Home from "../pages/client/Home";
import Practice from "../pages/client/Practice";
import Score from "../pages/client/Score";

const router = createBrowserRouter([
  {
    path: "/",
    element: <UserLayout />,
    children: [
      { path: "", element: <Home /> },
      { path: "curriculum", element: <Curriculum /> },
      { path: "blog", element: <Blog /> },
      { path: "feedback", element: <Feedback /> },
      { path: "asignmentDetail", element: <AsignmentDetail /> },
      { path: "practice", element: <Practice /> },
      { path: "score", element: <Score /> },
      { path: "aboutUs", element: <AboutUs /> }
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      { path: "overview", element: <Overview /> },
      { path: "accountMana", element: <AccountMana /> },
      { path: "asignmentMana", element: <AsignmentMana /> },
      { path: "asignmentDetailMana", element: <AsignmentDetailMana /> },
      { path: "blogMana", element: <BlogMana /> },
      { path: "studySchedule", element: <StudyScheduleMana /> }
    ],
  }
]);

export default router;
