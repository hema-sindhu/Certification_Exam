import React from "react";
import ReactDOM from "react-dom/client"; // Correct import for React 18+
import App from "./App";
import "./styles/App.css";

const root = ReactDOM.createRoot(document.getElementById("root")); // Ensures 'root' element exists in HTML
root.render(<App />);
