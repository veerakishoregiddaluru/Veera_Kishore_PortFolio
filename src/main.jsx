import "aos/dist/aos.css";
import AOS from "aos";

AOS.init({
  duration: 900,
  once: true,
});

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
