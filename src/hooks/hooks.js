import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../config/axios";

const getStoredData = (key) => {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error(`Error parsing localStorage data for ${key}:`, error);
    return [];
  }
};

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
    enabled: !!slug,
  });

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
    enabled: !!slug,
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
    enabled: !!categoryId,
  });
};

export const useBlogs = (page = 1, searchTerm = "") => {
  return useQuery({
    queryKey: ["blogs", page, searchTerm],
    queryFn: async () => {
      const url = searchTerm
        ? `/blogs/search?keyword=${searchTerm}&page=${page}`
        : `/blogs?page=${page}`;

      const response = await api.get(url);
      return response.data.data;
    },
    keepPreviousData: true,
    staleTime: 5 * 60 * 1000,
  });
};

export const useBlogDetails = (blogSlug) => {
  return useQuery({
    queryKey: ["blog", blogSlug],
    queryFn: async () => {
      if (!blogSlug) return null;
      const response = await api.get(`/blogs/d/${blogSlug}`);
      return response.data.data;
    },
    enabled: !!blogSlug,
  });
};

export const useWebinars = (page = 1, search = "") => {
  return useQuery({
    queryKey: ["webinars", { page, search }],
    queryFn: async () => {
      const url = search
        ? `/webinars/search?keyword=${search}&page=${page}`
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
    enabled: !!slug,
  });
};

export const useRecommendedWebinars = (categoryId) => {
  return useQuery({
    queryKey: ["recommendedWebinars", categoryId],
    queryFn: async () => {
      if (!categoryId) {
        return { recommended_blogs: [], recommended_webinars: [] };
      }
      const response = await api.get(`/recommend?category_id=${categoryId}`);
      return (
        response.data.data || {
          recommended_blogs: [],
          recommended_webinars: [],
        }
      );
    },
    enabled: !!categoryId,
  });
};

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

// Handle API errors
const handleApiError = (error) => {
  if (error.response) {
    // The request was made and the server responded with an error status
    console.error("API Error Response:", error.response.data);
    throw error;
  } else if (error.request) {
    // The request was made but no response was received
    console.error("API Error Request:", error.request);
    throw new Error(
      "No response received from server. Please check your internet connection."
    );
  } else {
    // Something happened in setting up the request
    console.error("API Error:", error.message);
    throw new Error("Error setting up request. Please try again.");
  }
};

// Get all careers
export const useCareers = (page = 1, search = "") => {
  return useQuery({
    queryKey: ["careers", { page, search }],
    queryFn: async () => {
      try {
        const url = search
          ? `/careers/search?query=${search}&page=${page}`
          : `/careers?page=${page}`;

        const response = await api.get(url);

        if (response.data.status === "success") {
          return response.data.data;
        } else {
          throw new Error(response.data.message || "Failed to fetch careers");
        }
      } catch (error) {
        return handleApiError(error);
      }
    },
    keepPreviousData: true,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

// Get career details by ID
export const useCareerDetails = (careerId) => {
  return useQuery({
    queryKey: ["careerDetails", careerId],
    queryFn: async () => {
      try {
        if (!careerId) throw new Error("Invalid career ID");

        const response = await api.get(`/careers/${careerId}`);

        if (response.data.status === "success") {
          return response.data.data;
        } else {
          throw new Error(
            response.data.message || "Failed to fetch career details"
          );
        }
      } catch (error) {
        return handleApiError(error);
      }
    },
    enabled: !!careerId,
  });
};

// Submit an application for a career
export const useSubmitApplication = () => {
  const mutationFn = async ({ careerId, formData }) => {
    try {
      const response = await api.post(`/careers/${careerId}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.data.status === "success") {
        return response.data.data;
      } else {
        throw new Error(
          response.data.message || "Failed to submit application"
        );
      }
    } catch (error) {
      throw handleApiError(error);
    }
  };

  return useMutation({ mutationFn });
};

// Get application status
export const useApplicationStatus = (applicationId) => {
  return useQuery({
    queryKey: ["applicationStatus", applicationId],
    queryFn: async () => {
      try {
        if (!applicationId) throw new Error("Invalid application ID");

        const response = await api.get(`/careers/application/${applicationId}`);

        if (response.data.status === "success") {
          return response.data.data;
        } else {
          throw new Error(
            response.data.message || "Failed to get application status"
          );
        }
      } catch (error) {
        return handleApiError(error);
      }
    },
    enabled: !!applicationId,
  });
};
