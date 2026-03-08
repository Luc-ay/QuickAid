import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import jsonData from "/data/nav.json";
import useResponsive from "../../customHooks/useResponsive";
import { useSelector } from 'react-redux';


import LogoSection from "./LogoSection";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import AuthButtons from "./AuthButtons";

const nav = jsonData.nav;

const Header = ({ hero = true }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { windowSize } = useResponsive();
  const redir = useNavigate();
  const menuRef = useRef();
  const fullName = useSelector((state) => state.user.fullName || "Guest");
  
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isMobileMenuOpen && menuRef.current && !menuRef.current.contains(e.target)) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen]);
  
  return (
    <motion.header
    className={`${hero ? "fixed" : "relative"
      } top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-lg backdrop-blur-md" : "bg-transparent"
        } ${windowSize.width > 768 &&
        windowSize.width < 2871 &&
        isScrolled &&
        "bg-white shadow-lg backdrop-blur-md"
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className=" lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <LogoSection logo={nav.logo} title={nav.title} isScrolled={isScrolled} />
          <DesktopNav
            navItems={nav["links-center"]}
            isScrolled={isScrolled}
            windowSize={windowSize}
            hero={hero}
          />
          <AuthButtons
            redir={redir}
            nav={nav}
            fullName={fullName}
            isScrolled={isScrolled}
            hero={hero}
            windowSize={windowSize}
          />

          <button className="lg:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? (
              <FaTimes className={`text-xl ${isScrolled && "text-gray-900"}`} />
            ) : (
              <FaBars className={`text-xl ${isScrolled && "text-gray-900"}`} />
            )}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <motion.div
            ref={menuRef}
            className="lg:hidden bg-white border-t border-gray-200"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <MobileNav
              navItems={nav["links-center"]}
              isScrolled={isScrolled}
              setIsMobileMenuOpen={setIsMobileMenuOpen}
              redir={redir}
              nav={nav}
            />
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
