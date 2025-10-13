import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Root.jsx';
import AuthProvider from './Auth/AuthProvider.jsx';
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider>
     <RouterProvider router={router} />
      <Toaster ></Toaster>
   </AuthProvider>
  </StrictMode>,
)
