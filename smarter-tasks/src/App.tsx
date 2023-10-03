import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import TaskListPage from "./pages/TaskListPage";
import Layout from "./Layout.tsx";
import TaskDetailPage from "./pages/TaskDetailPage.tsx";
import Signin from "./pages/Signin.tsx";
import ProtectedRoute from "./ProtectedRoute.tsx";
import NotFound from "./pages/NotFound.tsx";
import { ReactNode } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: (<Navigate to="/home" replace />) as ReactNode,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "tasks",
        element: <TaskListPage />,
      },
      {
        path: "tasks/:id",
        element: <TaskDetailPage />,
      },
    ],
  },
  {
    path: "/notfound",
    element: <NotFound />,
  },
  {
    path: "*",
    element: <Navigate to="/notfound" replace />,
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
