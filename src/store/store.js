import { create } from "zustand";
import axios from "axios";
import api from "./../config/axios";

const API_BASE_URL = "http://admin-dev.innovstem.com/api";

export const useStore = create((set) => {
  const getStoredData = (key) => {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error(`Error parsing localStorage data for ${key}:`, error);
      return [];
    }
  };

  return {
    topBlogs: getStoredData("topBlogs"),
    topCourses: getStoredData("topCourses"),
    categories: getStoredData("categories"),
    isLoading: false,
    error: null,

    fetchTopBlogs: async () => {
      set((state) => ({ ...state, isLoading: true, error: null }));
      try {
        const response = await api.get("/home");
        localStorage.setItem(
          "topBlogs",
          JSON.stringify(response.data.data.blogs)
        );
        set((state) => ({
          ...state,
          topBlogs: response.data.data.blogs,
          isLoading: false,
        }));
      } catch (error) {
        set((state) => ({ ...state, error: error.message, isLoading: false }));
      }
    },

    fetchTopCourses: async () => {
      set((state) => ({ ...state, isLoading: true, error: null }));
      try {
        const response = await api.get("/home");
        localStorage.setItem(
          "topCourses",
          JSON.stringify(response.data.data.courses)
        );
        set((state) => ({
          ...state,
          topCourses: response.data.data.courses,
          isLoading: false,
        }));
        console.log(response.data.data.courses);
      } catch (error) {
        set((state) => ({ ...state, error: error.message, isLoading: false }));
      }
    },

    fetchCategories: async () => {
      set({ isLoading: true, error: null });
      try {
        const response = await api.get("/courses/categories");
        localStorage.setItem("categories", JSON.stringify(response.data.data));
        set({ categories: response.data.data, isLoading: false });
      } catch (error) {
        set({ error: error.message, isLoading: false, categories: [] });
      }
    },
  };
});
