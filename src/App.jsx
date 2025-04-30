import { useState, useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routers/Router";
import { Loader } from "./components";
import { useAuthStore } from "./store/authStore";
import { useZoomControl } from "./hooks/useZoomControl";
import { HelmetProvider } from "react-helmet-async";

const App = () => {
  const [isAppLoading, setIsAppLoading] = useState(true);

  const currentZoom = useZoomControl();
  const { checkAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAppLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <HelmetProvider>
      <div className="text-black min-h-screen">
        {isAppLoading ? (
          <Loader />
        ) : (
          <RouterProvider router={router} fallbackElement={<Loader />} />
        )}
      </div>
    </HelmetProvider>
  );
};

export default App;
