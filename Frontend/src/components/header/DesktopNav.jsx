import { NavLink } from "react-router-dom";

const DesktopNav = ({ navItems, isScrolled, windowSize, hero }) => (
  <nav className="hidden lg:flex items-center space-x-8">
    {navItems.map((item, i) => (
      <NavLink
        key={item.path}
        to={item.path}
        className={({ isActive }) =>
          isActive
            ? "transition-colors font-[900] "
            : `font-inter font-[500] text-base  ${
                i > 1 && windowSize.width > 768 && windowSize.width < 2871 && hero && !isScrolled
                  ? "text-white"
                  : "text-gray-700"
              }`
        }
      >
        {item.name}
      </NavLink>
    ))}
  </nav>
);

export default DesktopNav;
