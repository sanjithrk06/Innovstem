import { useState, useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routers/Router";
import { Loader } from "./components";

const useZoomControl = () => {
  const [currentZoom, setCurrentZoom] = useState(100);

  useEffect(() => {
    const handleZoom = (event) => {
      const isZoomIn =
        event.ctrlKey && (event.key === "+" || event.key === "=");
      const isZoomOut = event.ctrlKey && event.key === "-";

      if (isZoomIn || isZoomOut) {
        const newZoom = isZoomIn ? currentZoom + 10 : currentZoom - 10;

        if (newZoom < 90 || newZoom > 110) {
          event.preventDefault();
        } else {
          setCurrentZoom(newZoom);
        }
      }
    };

    const handleWheelZoom = (event) => {
      if (event.ctrlKey) {
        const zoomDelta = event.deltaY < 0 ? 10 : -10;
        const newZoom = currentZoom + zoomDelta;

        if (newZoom < 90 || newZoom > 110) {
          event.preventDefault();
        } else {
          setCurrentZoom(newZoom);
        }
      }
    };

    document.addEventListener("keydown", handleZoom);
    document.addEventListener("wheel", handleWheelZoom, { passive: false });

    return () => {
      document.removeEventListener("keydown", handleZoom);
      document.removeEventListener("wheel", handleWheelZoom);
    };
  }, [currentZoom]);

  return currentZoom;
};

const App = () => {
  const [isAppLoading, setIsAppLoading] = useState(true);

  const currentZoom = useZoomControl();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAppLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="text-black min-h-screen">
      {isAppLoading ? (
        <Loader />
      ) : (
        <RouterProvider router={router} fallbackElement={<Loader />} />
      )}
    </div>
  );
};

export default App;
