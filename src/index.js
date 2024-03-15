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
    <main className=' bg-light flex flex-col items-end container sp mt-10 '>
      <BrowserRouter>
        <div className='lg:w-[calc(100vw-14rem)] xl:w-[calc(100vw-15rem)]  2xl:w-[calc(100vw-18rem)] w-full h-full'>
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
