import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../config/axios";

// Utility function to get data from localStorage
const getStoredData = (key) => {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error(`Error parsing localStorage data for ${key}:`, error);
    return [];
  }
};

// Fetch top blogs
export const useTopBlogs = () =>
  useQuery({
    queryKey: ["topBlogs"],
    queryFn: async () => {
      const response = await api.get("/home");
      localStorage.setItem(
        "topBlogs",
        JSON.stringify(response.data.data.blogs)
      );
      return response.data.data.blogs;
    },
    initialData: getStoredData("topBlogs"),
  });

// Fetch top courses
export const useTopCourses = () =>
  useQuery({
    queryKey: ["topCourses"],
    queryFn: async () => {
      const response = await api.get("/home");
      localStorage.setItem(
        "topCourses",
        JSON.stringify(response.data.data.courses)
      );
      return response.data.data.courses;
    },
    initialData: getStoredData("topCourses"),
  });

// Fetch course categories
export const useCategories = () =>
  useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const response = await api.get("/courses/categories");
      localStorage.setItem("categories", JSON.stringify(response.data.data));
      return response.data.data;
    },
    initialData: getStoredData("categories"),
  });

// Fetch courses by category slug
export const useCategoryBySlug = (slug) =>
  useQuery({
    queryKey: ["category", slug],
    queryFn: async () => {
      const response = await api.get(`/courses/category/${slug}`);
      if (response.data.status !== "success") {
        throw new Error("Failed to fetch category data");
      }
      return {
        categoryData: response.data.data.category,
        categoryCourses: response.data.data.courses,
      };
    },
    enabled: !!slug, // Only run query if slug exists
  });

// Mutation to reset category data (optional if used in a form or other interactions)
export const useResetCategoryData = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => ({
      categoryData: null,
      categoryCourses: [],
    }),
    onSuccess: () => {
      queryClient.invalidateQueries(["category"]);
    },
  });
};

export const useCourseDetails = (slug) => {
  return useQuery({
    queryKey: ["courseDetails", slug],
    queryFn: async () => {
      if (!slug) throw new Error("Invalid course slug");
      const response = await api.get(`/courses/d/${slug}`);
      return response.data.data;
    },
    enabled: !!slug, // Only run query if slug is available
  });
};

export const useRecommendedCourses = (categoryId) => {
  return useQuery({
    queryKey: ["recommendedCourses", categoryId],
    queryFn: async () => {
      if (!categoryId)
        return { recommended_blogs: [], recommended_courses: [] };
      const response = await api.get(`/recommend?category_id=${categoryId}`);
      return (
        response.data.data || { recommended_blogs: [], recommended_courses: [] }
      );
    },
    enabled: !!categoryId, // Only fetch recommendations if categoryId is available
  });
};

export const useBlogs = (page = 1, searchTerm = "") => {
  return useQuery({
    queryKey: ["blogs", page, searchTerm],
    queryFn: async () => {
      const url = searchTerm
        ? `/blogs/search?query=${searchTerm}&page=${page}`
        : `/blogs?page=${page}`;

      const response = await api.get(url);
      return response.data.data;
    },
    keepPreviousData: true, // Keep previous data while fetching new data
    staleTime: 5 * 60 * 1000, // Consider data fresh for 5 minutes
  });
};

export const useBlogDetails = (blogSlug) => {
  return useQuery({
    queryKey: ["blog", blogSlug],
    queryFn: async () => {
      if (!blogSlug) return null;
      console.log(blogSlug);
      const response = await api.get(`/blogs/d/${blogSlug}`);
      return response.data.data; // No need to parse `.json()`
    },
    enabled: !!blogSlug, // Ensures fetch runs only if blogSlug exists
  });
};

export const useWebinars = (page = 1, search = "") => {
  return useQuery({
    queryKey: ["webinars", { page, search }],
    queryFn: async () => {
      const url = search
        ? `/webinars/search?query=${search}&page=${page}`
        : `/webinars?page=${page}`;

      const response = await api.get(url);
      return response.data.data;
    },
    keepPreviousData: true,
    staleTime: 1000 * 60 * 5,
  });
};

export const useWebinarDetails = (slug) => {
  return useQuery({
    queryKey: ["webinarDetails", slug],
    queryFn: async () => {
      if (!slug) throw new Error("Invalid webinar slug");
      const response = await api.get(`/webinars/d/${slug}`);
      return response.data.data;
    },
    enabled: !!slug, // Only run query if slug is available
  });
};

export const useRecommendedWebinars = (categoryId) => {
  return useQuery({
    queryKey: ["recommendedWebinars", categoryId],
    queryFn: async () => {
      if (!categoryId)
        return { recommended_blogs: [], recommended_webinars: [] };
      const response = await api.get(
        `/recommend-webinars?category_id=${categoryId}`
      );
      return (
        response.data.data || {
          recommended_blogs: [],
          recommended_webinars: [],
        }
      );
    },
    enabled: !!categoryId, // Only fetch recommendations if categoryId is available
  });
};

// Helper function to format date and time
export const formatDateTime = (dateTimeString) => {
  if (!dateTimeString) return { date: "TBD", time: "TBD" };

  const dateTime = new Date(dateTimeString);

  const date = dateTime.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const time = dateTime.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  return { date, time };
};
