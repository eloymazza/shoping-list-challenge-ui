import React from "react";
import ReactDOM from "react-dom/client";
import Providers from "./providers/Providers.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/Layout/RootLayout.tsx";
import ErrorPage from "./components/Layout/ErrorPage.tsx";
import ShoppingListPage from "./pages/ShoppingList/ShoppingListPage.tsx";

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
            <ShoppingListPage />
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
