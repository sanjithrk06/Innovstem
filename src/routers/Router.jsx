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
  Dashboard,
  CategoryPage,
  Register,
  WebinarPage,
} from "../pages";
import DashboardLayout from "../layouts/Dashboard.jsx";

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
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "resources",
        element: <Resources />,
      },
    ],
  },
  {
    path: "/auth",
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
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
        children: [
          {
            index: true,
            element: <Courses />,
          },
          {
            path: ":slug",
            element: <CategoryPage />,
          },
          {
            path: "course/:slug",
            element: <CoursePage />,
          },
        ],
      },
      {
        path: "blogs",
        children: [
          {
            index: true,
            element: <Blogs />,
          },
          {
            path: ":blogSlug",
            element: <BlogPage />,
          },
        ],
      },
      {
        path: "resources",
        element: <Resources />,
      },
      {
        path: "webinars",
        children: [
          {
            index: true,
            element: <Webinars />,
          },
          {
            path: ":slug",
            element: <WebinarPage />,
          },
        ],
      },

      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

export default router;
