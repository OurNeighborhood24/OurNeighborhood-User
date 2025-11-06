import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/mobile.css";

const rootEl = document.getElementById("root");
if (!rootEl) throw new Error("Failed to find root element");

const root = createRoot(rootEl);
root.render(<App />);
