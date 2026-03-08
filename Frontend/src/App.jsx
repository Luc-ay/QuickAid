import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import Header from './components/Header';
import Hero from './components/Hero';
import ScrollingBanner from './components/ScrollingBanner';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
// import Login from './components/Pages/login';
import Register from './components/Pages/register';
import Login from './components/Pages/login';

function AppContent() {
  const location = useLocation();
  const hideNavbarRoutes = ['/login', '/register'];

  return (
    <div className="font-inter">
      {!hideNavbarRoutes.includes(location.pathname) && <Header />}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <ScrollingBanner />
              <Features />
              <HowItWorks />
              <Newsletter />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      {!hideNavbarRoutes.includes(location.pathname) && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
