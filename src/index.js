import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { UserProvider } from "./context/userContext";
import { ProductProvider } from "./context/productContext";


ReactDOM.render(
  <React.StrictMode>
   <UserProvider>
       <ProductProvider>
             <App />
          </ProductProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


