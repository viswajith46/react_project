import React from "react";
import ReactDOMClient from "react-dom/client";
import { Background } from "./screens/Background";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<Background />);
