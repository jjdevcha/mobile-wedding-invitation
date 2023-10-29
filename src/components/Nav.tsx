import React, { useState, useEffect } from "react";

function Nav() {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`z-[100] text-sm fixed top-0 flex justify-between items-center w-full h-12 xs:w-[414px] divide-x bg-white mx-auto shadow-md ${
        showNav ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="flex items-center justify-center flex-1 px-1">
        <a href="#" className="text-gray-800 ">
          처음으로
        </a>
      </div>
      <div className="flex items-center justify-center flex-1 px-1">
        <a href="#" className="text-gray-800">
          사진첩
        </a>
      </div>
      <div className="flex items-center justify-center flex-1 px-1">
        <a href="#" className="text-gray-800">
          축하메시지
        </a>
      </div>
      <div className="flex items-center justify-center flex-1 px-1">
        <a href="#" className="text-gray-800">
          오시는길
        </a>
      </div>
    </nav>
  );
}

export default Nav;
