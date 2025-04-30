import React, { useState, useEffect } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore.js";
import MainLayout from "../layouts/MainLayout.jsx";
import DashboardLayout from "../layouts/Dashboard.jsx";
import { Loader } from "../components/index.js";
import {
  About,
  BlogPage,
  Blogs,
  CoursePage,
  Courses,
  Home,
  Login,
  Resources,
  Services,
  Webinars,
  Dashboard,
  CategoryPage,
  Register,
  WebinarPage,
  ErrorPage,
  CareersPage,
  Forget,
  Reset,
} from "../pages";

const PATHS = {
  HOME: "/",
  LOGIN: "/auth/login",
  REGISTER: "/auth/register",
  FORGET: "/auth/forget-password",
  RESET: "/auth/reset-password/:token",
  DASHBOARD: "/dashboard",
  SERVICES: "/services",
  COURSES: "/courses",
  COURSES_CATEGORY: "/courses/:slug",
  COURSES_PAGE: "/courses/course/:slug",
  CAREERS_PAGE: "/careers",
  BLOGS: "/blogs",
  BLOG_PAGE: "/blogs/:blogSlug",
  RESOURCES: "/resources",
  WEBINARS: "/webinars",
  WEBINAR_PAGE: "/webinars/:slug",
  ABOUT: "/about",
  ADMIN_DASHBOARD: "/dashboard/admin",
  STUDENT_DASHBOARD: "/dashboard/student",
  ERROR_PAGE: "/error",
};

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, isCheckingAuth } = useAuthStore();

  if (isCheckingAuth) {
    return <Loader />;
  }

  if (!isAuthenticated) {
    return <Navigate to={PATHS.LOGIN} replace />;
  }

  return children;
};

const RedirectRoute = ({ children }) => {
  const { isAuthenticated, isCheckingAuth } = useAuthStore();

  if (isCheckingAuth) {
    return <Loader />;
  }

  if (isAuthenticated) {
    return <Navigate to={PATHS.HOME} replace />;
  }

  return children;
};

const withLoader = (WrappedComponent, pageName) => {
  return (props) => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        setIsLoading(true);
        try {
          await new Promise((resolve) => setTimeout(resolve, 1500));
          const result = {
            page: pageName,
            data: `Loaded data for ${pageName}`,
          };
          setData(result);
        } catch (error) {
          console.error(`Error loading data for ${pageName}:`, error);
        } finally {
          setIsLoading(false);
        }
      };

      fetchData();
    }, []);

    if (isLoading) {
      return <Loader />;
    }

    return <WrappedComponent {...props} data={data} />;
  };
};

const HomeWithLoader = withLoader(Home, "Home");
const ServicesWithLoader = withLoader(Services, "Services");
const CoursesWithLoader = withLoader(Courses, "Courses");
const CategoryPageWithLoader = withLoader(CategoryPage, "CategoryPage");
const CoursePageWithLoader = withLoader(CoursePage, "CoursePage");
const CareersPageWithLoader = withLoader(CareersPage, "CareersPage");
const BlogsWithLoader = withLoader(Blogs, "Blogs");
const BlogPageWithLoader = withLoader(BlogPage, "BlogPage");
const ResourcesWithLoader = withLoader(Resources, "Resources");
const WebinarsWithLoader = withLoader(Webinars, "Webinars");
const WebinarPageWithLoader = withLoader(WebinarPage, "WebinarPage");
const AboutWithLoader = withLoader(About, "About");
const LoginWithLoader = withLoader(Login, "Login");
const RegisterWithLoader = withLoader(Register, "Register");
const ForgetWithLoader = withLoader(Forget, "Forget");
const ResetWithLoader = withLoader(Reset, "Reset");
const DashboardWithLoader = withLoader(Dashboard, "Dashboard");

// Router Configuration
const router = createBrowserRouter([
  // Public Routes (Main Layout)
  {
    path: PATHS.HOME,
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomeWithLoader />,
      },
      {
        path: PATHS.SERVICES,
        element: <ServicesWithLoader />,
      },
      {
        path: PATHS.COURSES,
        children: [
          {
            index: true,
            element: <CoursesWithLoader />,
          },
          {
            path: PATHS.COURSES_CATEGORY,
            element: <CategoryPageWithLoader />,
          },
          {
            path: PATHS.COURSES_PAGE,
            element: <CoursePageWithLoader />,
          },
        ],
      },
      {
        path: PATHS.BLOGS,
        children: [
          {
            index: true,
            element: <BlogsWithLoader />,
          },
          {
            path: PATHS.BLOG_PAGE,
            element: <BlogPageWithLoader />,
          },
        ],
      },
      {
        path: PATHS.RESOURCES,
        element: <ResourcesWithLoader />,
      },
      {
        path: PATHS.WEBINARS,
        children: [
          {
            index: true,
            element: <WebinarsWithLoader />,
          },
          {
            path: PATHS.WEBINAR_PAGE,
            element: <WebinarPageWithLoader />,
          },
        ],
      },
      {
        path: PATHS.ABOUT,
        element: <AboutWithLoader />,
      },
      {
        path: PATHS.CAREERS_PAGE,
        element: <CareersPageWithLoader />,
      },
    ],
  },
  {
    path: "/auth",
    children: [
      {
        path: "login",
        element: (
          <RedirectRoute>
            <LoginWithLoader />
          </RedirectRoute>
        ),
      },
      {
        path: "register",
        element: (
          <RedirectRoute>
            <RegisterWithLoader />
          </RedirectRoute>
        ),
      },
      {
        path: "forgot-password",
        element: (
          <RedirectRoute>
            <ForgetWithLoader />
          </RedirectRoute>
        ),
      },
      {
        path: "reset-password/:token",
        element: (
          <RedirectRoute>
            <ResetWithLoader />
          </RedirectRoute>
        ),
      },
    ],
  },
  {
    path: PATHS.DASHBOARD,
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <DashboardWithLoader />,
      },
      {
        path: "resources",
        element: <ResourcesWithLoader />,
      },
    ],
  },

  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default router;
