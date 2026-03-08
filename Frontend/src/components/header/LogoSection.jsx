const LogoSection = ({ logo, title, isScrolled }) => (
  <div className="flex items-center space-x-2">
    <img
      src={logo}
      loading="lazy"
      alt="Logo"
      className={`text-2xl transition-colors ${isScrolled ? "text-primary-500" : "text-white"}`}
    />
    <span className={`text-2xl font-bold ${isScrolled ? "text-gray-900" : "text-gray-900"}`}>
      {title || "QuickAid"}
    </span>
  </div>
);

export default LogoSection;
