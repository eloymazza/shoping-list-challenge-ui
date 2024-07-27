import React from "react";
import ReactDOM from "react-dom/client";
import Providers from "./providers/Providers.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/Layout/RootLayout.tsx";
import TaskList from "./pages/TaskList.tsx";
import ErrorPage from "./components/Layout/ErrorPage.tsx";

// TODO: improve routes wrapping
const router = createBrowserRouter([
  {
    path: "/",
    element: <Providers />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: (
          <RootLayout>
            <TaskList />
          </RootLayout>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
