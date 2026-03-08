const AuthButtons = ({ redir, nav, isScrolled, hero, windowSize,user }) => (
  <div className=" gap-2 md:gap-[10.5px] flex items-center">
    <div className="w-[40px] h-[40px] relative ">
      <img className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] rounded-full object-cover " src={nav.user.avater} alt={nav.user.name} loading="lazy" />
      <img className="absolute top-0 right-0 md:right-[-5.42px] w-[17.5px] h-[17.5px] " src={nav.user.verified} alt="verified badge" loading="lazy" />
      
    </div>
    <div className="flex gap-0 flex-col items-center ">
      <span className="font-jakarta font-normal text-[12px] md:text-base text-[#454A53] text-nowrap "> {user.fullName} </span>
      <span className="font-sans font-normal text-[10px] md:text-[12px] text-[#9EA2AD] text-nowrap "> {user.email} </span>
    </div>
        
  </div>
);

export default AuthButtons;
