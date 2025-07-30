import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";
import ErrorPage from "./Error";
import Contact from "./Routes/contact";
import { getContactLoader, getContactsLoader } from "./Loaders/Loader";
import { getactionContact } from "./Action/Action";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: getContactsLoader,
    action: getactionContact,
    children: [
      {
        path: "Contacts/:contactId",
        element: <Contact />,
        loader: getContactLoader,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
