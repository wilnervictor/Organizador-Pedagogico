import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PagesAulas from './page'
import PageFaltas from "./pageFaltas";
import './index.css'
import App from './App.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/planejamento",
    element: <PagesAulas/>
  },
  {
    path: "/percentua",
    element: <PageFaltas/>
  },
  {
    path: "*",
    element: <div>Essa página não existe (ou erro 404)...</div>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
