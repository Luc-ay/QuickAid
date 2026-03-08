// routes/router.js
import { createBrowserRouter } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';
import Loading from '../components/Loading';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

// Lazy load components
const App = lazy(() => import('../App'));
const Login = lazy(() => import('../pages/auth/Login'));
const Signup = lazy(() => import('../pages/auth/Register'));
const Index = lazy(() => import('../pages/dashboard/Index'));
const About = lazy(() => import('../pages/About'));
const Contact = lazy(() => import('../pages/Contact'));
const Services = lazy(() => import('../pages/Services'));
const EmergencyRequest = lazy(() => import('../pages/dashboard/EmergencyRequest'));
const NearbyFacilities = lazy(() => import('../pages/dashboard/NearbyFacilities'));
const FirstAid = lazy(() => import('../pages/dashboard/FirstAid'));
const Help = lazy(() => import('../pages/dashboard/Help'));

// Suspense wrapper helper
const withSuspense = (Component) => (
  <Suspense fallback={<Loading />}>
    <Component />
     <ToastContainer 
         position="bottom-right" 
         autoClose={5000} 
         hideProgressBar={false}
         newestOnTop={false}
         closeOnClick
         rtl={false}
         pauseOnFocusLoss
         draggable
         pauseOnHover
         theme="light" 
      />
  </Suspense>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: withSuspense(App),
  },
  {
    path: '/about',
    element: withSuspense(About),
  },
  {
    path: '/contact',
    element: withSuspense(Contact),
  },
  {
    path: '/services',
    element: withSuspense(Services),
  },
  {
    path: '/auth',
    children: [
      {
        index: true,
        element: withSuspense(Login),
      },
      {
        path: 'login',
        element: withSuspense(Login),
      },
      {
        path: 'signup',
        element: withSuspense(Signup),
      },
    ],
  },
  {
    path: '/dashboard',
    children: [
      {
        index: true,
        element: withSuspense(Index),
      },
      {
        path: "emergency-request",
        element: withSuspense(EmergencyRequest),
      },
      {
        path: "nearby-facilities",
        element: withSuspense(NearbyFacilities),
      },
      {
        path: "first-aid",
        element: withSuspense(FirstAid),
      },
      {
        path: "help",
        element: withSuspense(Help),
      },
      
    ],
  },
]);

export default router;
