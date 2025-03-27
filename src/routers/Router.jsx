import React, { useState, useEffect } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore.js";
import MainLayout from "../layouts/MainLayout.jsx";
import DashboardLayout from "../layouts/Dashboard.jsx";
import { Loader } from "../components/index.js";
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

// Constants for roles
const ROLES = {
  ADMIN: "admin",
  STUDENT: "student",
  USER: "user",
};

// Constants for paths
const PATHS = {
  HOME: "/",
  LOGIN: "/auth/login",
  REGISTER: "/auth/register",
  DASHBOARD: "/dashboard",
  SERVICES: "/services",
  COURSES: "/courses",
  COURSES_CATEGORY: "/courses/:slug",
  COURSES_PAGE: "/courses/course/:slug",
  BLOGS: "/blogs",
  BLOG_PAGE: "/blogs/:blogSlug",
  RESOURCES: "/resources",
  WEBINARS: "/webinars",
  WEBINAR_PAGE: "/webinars/:slug",
  ABOUT: "/about",
  ADMIN_DASHBOARD: "/dashboard/admin",
  STUDENT_DASHBOARD: "/dashboard/student",
};

// Protected Route Component
const ProtectedRoute = ({ role, children }) => {
  const { user, isAuthenticated, isCheckingAuth } = useAuthStore();

  if (isCheckingAuth) {
    return <Loader />;
  }

  if (!isAuthenticated) {
    return <Navigate to={PATHS.LOGIN} replace />;
  }

  if (role && !role.includes(user?.role)) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F5E8C7]">
        <h1 className="text-2xl font-semibold text-[#5A7D9A]">
          Access Denied: You do not have permission to view this page.
        </h1>
      </div>
    );
  }

  return children;
};

// Higher-Order Component to add loading state to pages
const withLoader = (WrappedComponent, pageName) => {
  return (props) => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        setIsLoading(true);
        try {
          // Simulate a 2-second delay for data fetching
          await new Promise((resolve) => setTimeout(resolve, 2000));
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

// Wrap each page component with the loader HOC
const HomeWithLoader = withLoader(Home, "Home");
const ServicesWithLoader = withLoader(Services, "Services");
const CoursesWithLoader = withLoader(Courses, "Courses");
const CategoryPageWithLoader = withLoader(CategoryPage, "CategoryPage");
const CoursePageWithLoader = withLoader(CoursePage, "CoursePage");
const BlogsWithLoader = withLoader(Blogs, "Blogs");
const BlogPageWithLoader = withLoader(BlogPage, "BlogPage");
const ResourcesWithLoader = withLoader(Resources, "Resources");
const WebinarsWithLoader = withLoader(Webinars, "Webinars");
const WebinarPageWithLoader = withLoader(WebinarPage, "WebinarPage");
const AboutWithLoader = withLoader(About, "About");
const LoginWithLoader = withLoader(Login, "Login");
const RegisterWithLoader = withLoader(Register, "Register");
const DashboardWithLoader = withLoader(Dashboard, "Dashboard");
const AdminDashboardWithLoader = withLoader(AdminDashboard, "AdminDashboard");
const StudentDashboardWithLoader = withLoader(
  StudentDashboard,
  "StudentDashboard"
);

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
    ],
  },

  // Authentication Routes
  {
    path: "/auth",
    children: [
      {
        path: "login",
        element: <LoginWithLoader />,
      },
      {
        path: "register",
        element: <RegisterWithLoader />,
      },
    ],
  },

  // Protected Routes (Dashboard Layout)
  {
    path: PATHS.DASHBOARD,
    element: (
      <ProtectedRoute role={[ROLES.ADMIN, ROLES.STUDENT, ROLES.USER]}>
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
      {
        path: "admin",
        element: (
          <ProtectedRoute role={[ROLES.ADMIN]}>
            <AdminDashboardWithLoader />
          </ProtectedRoute>
        ),
      },
      {
        path: "student",
        element: (
          <ProtectedRoute role={[ROLES.STUDENT]}>
            <StudentDashboardWithLoader />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export default router;
