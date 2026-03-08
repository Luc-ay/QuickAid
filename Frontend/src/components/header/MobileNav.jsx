import { NavLink } from "react-router-dom";

const MobileNav = ({ navItems, isScrolled, setIsMobileMenuOpen, redir, nav }) => {
  return (
    <nav className="py-4 px-4 space-y-4 shadow-lg">
      {navItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          onClick={() => setIsMobileMenuOpen(false)}
          className={({ isActive }) => {
            const base = "block text-gray-700 hover:text-primary-500";
            const active = "transition-colors font-[900]";
            const inactive = "font-inter font-[500] text-base";
            return `${base} ${isActive ? active : inactive} ${isScrolled ? "" : ""}`;
          }}
        >
          {item.name}
        </NavLink>
      ))}
      {/* Login and Signup */}
      <button
        className="w-full px-6 py-2 rounded-lg border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white transition-all"
        onClick={() => redir(nav.buttons.login.path)}
      >
        {nav.buttons.login.name}
      </button>
      <button
        className="w-full px-6 py-2 rounded-lg border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white transition-all"
        onClick={() => redir(nav.buttons.signup.path)}
      >
        {nav.buttons.signup.name}
      </button>
    </nav>
  );
};

export default MobileNav;
