import { RouterProvider } from "react-router-dom";
import router from "./routers/Router";

function App() {
  return (
    <div className=" text-black">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
