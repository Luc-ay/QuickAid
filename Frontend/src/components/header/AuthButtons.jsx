const AuthButtons = ({ redir, nav, isScrolled, hero, windowSize }) => (
  <div className="hidden gap-[28px] lg:flex items-center">
    
         <button
              className={`px-[50px] py-[10px] rounded-lg border-2 transition-all hover:bg-primary-500 hover:text-white ${
                hero &&
                (isScrolled
                  ? "border-[#007AFF] text-[#007AFF]"
                  : "text-white hover:border-[#007AFF]")
              }
              ${
                !(windowSize.width > 768 && windowSize.width < 2871) &&
                "border-[#007AFF] text-[#007AFF]"
              }
             ` }
              onClick={() => redir(nav.buttons.login.path)}
              aria-label="Login"
            >
              {nav.buttons.login.name}
            </button>
    {/* signup button */}
    <button
      className={`px-[37.5px] py-[10px] rounded-lg border-2 transition-all hover:bg-primary-500 hover:text-white ${
        hero
          ? isScrolled
            ? "border-[#007AFF] text-[#007AFF]"
            : "border-[#007AFF] bg-[#007AFF] text-white hover:border-white hover:bg-white hover:text-[#007AFF]"
          : ""
      }`}
      onClick={() => redir(nav.buttons.signup.path)}
    >
      {nav.buttons.signup.name}
    </button>
  </div>
);

export default AuthButtons;
