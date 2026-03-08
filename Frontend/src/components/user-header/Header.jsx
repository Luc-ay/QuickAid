import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import jsonData from "/data/dashboard.json";
import useResponsive from "../../customHooks/useResponsive";

import LogoSection from "./LogoSection";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import AuthButtons from "./AuthButtons";
import { useSelector } from "react-redux";

const nav = jsonData.nav;

const Header = ({ hero = false }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { windowSize } = useResponsive();
  const redir = useNavigate();
  const menuRef = useRef();
    const user = useSelector((state) => state.user);

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
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg backdrop-blur-md" : "bg-transparent"
      } ${
        windowSize.width > 1325 &&
        windowSize.width < 1871 &&
        isScrolled &&
        "bg-white shadow-lg backdrop-blur-md"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="h-[94px]   lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  ">
        <div className="px-[16px] py-6  md:px-[50px] xl:px-[100px] w-full flexBetween gap-3 ">
          <LogoSection logo={nav.logo} title={nav.title} isScrolled={isScrolled} />
          <DesktopNav
            navItems={nav["links-center"]}
            isScrolled={isScrolled}
            windowSize={windowSize}
            hero={hero}
          />
        <div className="flexBetween gap-[10px] flex-nowrap ">
            <AuthButtons
            redir={redir}
            nav={nav}
            isScrolled={isScrolled}
            hero={hero}
            windowSize={windowSize}
            user={user}
          />
          <button className="lg:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? (
              <FaTimes className={`text-xl ${isScrolled && "text-gray-900"}`} />
            ) : (
              <FaBars className={`text-xl ${isScrolled && "text-gray-900"}`} />
            )}
          </button>
        </div>
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
