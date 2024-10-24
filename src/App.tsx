import "pulsewidth-ui/dist/style.css";
import "./App.css";
import LandingPage from "./views/LandingPage/LandingPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Docs from "./views/Docs/Docs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/docs",
    element: <Docs />,
  },
  {
    path: "/docs/:page",
    element: <Docs />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
