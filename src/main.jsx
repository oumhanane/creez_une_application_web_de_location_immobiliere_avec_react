import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>404 not found</h1>,
  },
  {
    path: "/Apartments",
    element: <div>appartement</div>,
  },
  {
    path: "/About",
    element: <div>A propos</div>,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
