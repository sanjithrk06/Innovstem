import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore.js";
import MainLayout from "../layouts/MainLayout.jsx";
import {
  About,
  AdminDashboard,
  BlogPage,
  Blogs,
  CoursePage,
  Courses,
  Home,
  Login,
  Resources,
  Services,
  StudentDashboard,
  Webinars,
} from "../pages";

const ProtectedRoute = ({ role, children }) => {
  const { user, isAuthenticated, isCheckingAuth } = useAuthStore();

  if (isCheckingAuth) return <h1>Loading...</h1>;

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (role && !role.includes(user?.role)) {
    return <h1>Access Denied</h1>;
  }

  return children;
};

const router = createBrowserRouter([
  {
    path: "/admin-dashboard",
    element: (
      <ProtectedRoute role={["admin"]}>
        <AdminDashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: "/student-dashboard",
    element: (
      <ProtectedRoute role={["student", "admin"]}>
        <StudentDashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "courses",
        element: <Courses />,
      },
      {
        path: "coursepage",
        element: <CoursePage />,
      },
      {
        path: "blogs",
        element: <Blogs />,
      },
      {
        path: "resources",
        element: <Resources />,
      },
      {
        path: "webinars",
        element: <Webinars />,
      },
      {
        path: "blogpage",
        element: <BlogPage />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
