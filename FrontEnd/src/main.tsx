import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomePage from './pages/Homepage.tsx';
import SampleTracking from './pages/SampleTrackingPage.tsx';
import DataManagementPage from './pages/DataManagementPage.tsx';
import InventoryManagementPage from './pages/InventoryMangementPage.tsx';
import UserAccountManagementPage from './pages/UserAccountManagementPage.tsx';
import ReportingPage from './pages/ReportingPage.tsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<HomePage />} />
      <Route path='/home' element={<HomePage/>}/>
      <Route path='/Sample Tracking' element={<SampleTracking/>}/>
      <Route path='/Data Management' element={<DataManagementPage/>}/>
      <Route path='/Inventory Management' element={<InventoryManagementPage/>}/>
      <Route path='/User Account Management' element={<UserAccountManagementPage/>}/>
      <Route path='/Reporting' element={<ReportingPage/>}/>
      <Route path='/temp' element={<></>}/>
      
    </Route>
)
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>,
)
