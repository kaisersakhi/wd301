import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import TaskListPage from "./pages/TaskListPage";
import Layout from "./Layout.tsx";
import TaskDetailsPage from "./pages/TaskDetailsPage.tsx";
import Signin from "./pages/Signin.tsx";
import ProtectedRoute from "./ProtectedRoute.tsx";
import Notfound from "./pages/Notfound.tsx";
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
        element: <TaskDetailsPage />,
      },
    ],
  },
  {
    path: "/notfound",
    element: <Notfound />,
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
