import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <main className=' bg-light flex flex-col items-end container'>
      <BrowserRouter>
        <div className='md:w-[calc(100vw-14rem)] w-full h-full'>
          <App />
        </div>
      </BrowserRouter>
    </main>
  </React.StrictMode>
);
