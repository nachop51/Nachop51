import "./index.css";
import App from "./components/App";

import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

const element = document.getElementById("root");
const root = ReactDOM.createRoot(element);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
