import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";
import Contexts from "./provider/Contexts";
import AuthProvider, { AuthContext } from "./provider/AuthProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <Contexts>
        <RouterProvider router={router} />
      </Contexts>
    </AuthProvider>
  </StrictMode>
);
