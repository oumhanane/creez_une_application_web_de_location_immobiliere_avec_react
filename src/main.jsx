import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; 
import { RouterProvider } from 'react-router-dom';
import { Router } from './routes/router'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={Router}>
      <BrowserRouter>
      </BrowserRouter>
    </RouterProvider>
  </React.StrictMode>,
);
