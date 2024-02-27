import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import CartContextProvider from "./context/CartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <main className=' bg-light flex flex-col items-end container sp '>
      <BrowserRouter>
        <div className='md:w-[calc(100vw-14rem)] w-full h-full'>
          <AuthContextProvider>
            <CartContextProvider >
              <App />
            </CartContextProvider>
          </AuthContextProvider>
        </div>
      </BrowserRouter>
    </main>
  </React.StrictMode>
);
