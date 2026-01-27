import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, Briefcase, Code, BriefcaseBusiness, Mail } from "lucide-react";

const Hero = () => {
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState(
    localStorage.getItem("active") ? localStorage.getItem("active") : "profile",
  );

  const navItems = [
    { id: "profile", icon: User, route: "/", label: "Profile" },
    { id: "projects", icon: Briefcase, route: "/projects", label: "Projects" },
    { id: "skills", icon: Code, route: "/skills", label: "Skills" },
    { id: "contact", icon: Mail, route: "/contact", label: "Contact" },
  ];

  const handleNavigation = (item) => {
    setActiveItem(item.id);
    localStorage.setItem("active", item.id);
    navigate(item.route);
  };

  const DesktopNavItem = ({ item }) => {
    const Icon = item.icon;
    const isActive = activeItem === item.id;

    return (
      <button
        className={`
          flex items-center gap-3 
          capitalize p-3
          rounded-lg transition-all duration-200
          w-full text-left text-white
          ${
            isActive
              ? " border text-sky-900  border-white"
              : "  "
          }
        `}
        onClick={() => handleNavigation(item)}
        aria-label={item.label}
        aria-current={isActive ? "page" : undefined}
      >
        <Icon
          className={`
            w-5 h-5
               ${
            isActive
              ? "  text-sky-900"
              : "  " }
          `}
          strokeWidth={isActive ? 2.5 : 1.75}
        />
        <span className= {`font-medium ${
            isActive
              ? "  text-sky-900"
              : "  " } `}>{item.label}</span>
      </button>
    );
  };

  const MobileNavItem = ({ item }) => {
    const Icon = item.icon;
    const isActive = activeItem === item.id;

    return (
      <button
        key={item.id}
        className="flex-1 flex justify-center group z-20"
        onClick={() => handleNavigation(item)}
        aria-label={item.label}
        aria-current={isActive ? "page" : undefined}
      >
        <div
          className={`
            flex items-center justify-center
            border rounded-full 
            transition-all duration-100
            bg-sky-500 
            w-8 h-8 text-white
            min-[380px]:w-[46px] min-[380px]:h-[46px]
                ${
            isActive
              ? "   "
              : " bg-sky-900 border-none "
          }
          `}
        >
          <Icon
            className={`
              w-4 h-4 
              min-[380px]:w-[23px] min-[380px]:h-[23px]
            `}
            strokeWidth={isActive ? 2.5 : 1.75}
          />
        </div>
      </button>
    );
  };

  return (
    <>

      


      <div className="fixed top-0 h-[40px] inset-x-0 z-10 bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-400    border-b  text-white md:hidden">
        <div className="flex justify-between items-center p-4 pt-4 md:hidden">
          {navItems.map((item) => (
            <MobileNavItem key={item.id} item={item} />
          ))}
        </div>
      </div>

      <div
        className="hidden md:flex flex-col gap-y-2 fixed inset-y-0 start-0 p-4 pt-12 w-[25%] lg:w-[20%] min-[1200px]:w-[19%]
                 from-cyan-500 via-sky-500 to-blue-400 bg-gradient-to-r "
      >        <nav className="flex flex-col gap-y-1">
          {navItems.map((item) => (
            <DesktopNavItem key={item.id} item={item} />
          ))}
        </nav>
      </div>
    </>
  );
};

export default Hero;
