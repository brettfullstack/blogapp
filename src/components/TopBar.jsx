import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { BiMenu } from "react-icons/bi";
import { AiFillCloseCircle } from "react-icons/ai";

const TopBar = () => {
  const [menu, setMenu] = useState(false);
  const [screenSize, setScreenSize] = useState(undefined);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (() => 1400) {
      setMenu(false);
    }
  }, [screenSize]);

  return (
    <div className="w-full h-[50px] sticky top-0 flex items-center jost bg-white z-10">
      <div className="hidden sm:flex flex-[3] justify-center items-center">
        Coded by Mustafa Başar
      </div>
      <div className="flex-[6]">
        <div className="ml-5 block sm:hidden" onClick={() => setMenu(!menu)}>
          <BiMenu className="text-3xl" />
        </div>
        {menu ? (
          <div className="w-[15rem] bg-slate-200 absolute h-screen top-0">
            <div
              className="absolute right-5 top-2 p-2"
              onClick={() => setMenu(false)}
            >
              <AiFillCloseCircle className="text-xl" />
            </div>
            <div className="flex flex-col justify-center items-center mt-10">
              <p className="text-xl">React & Node</p>
              <p className="text-xl">Blog</p>
            </div>
            <ul className="flex flex-col justify-center items-center gap-5 mt-5">
              {["Home", "About", "Contact", "Write", "LogOut"].map(
                (item, idx) => (
                  <li
                    className="text-lg font-light cursor-pointer hover:underline"
                    key={idx}
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>
        ) : (
          <ul className="hidden sm:flex justify-center items-center gap-5">
            {["Home", "About", "Contact", "Write", "LogOut"].map(
              (item, idx) => (
                <li
                  className="text-lg font-light cursor-pointer hover:underline"
                  key={idx}
                >
                  {item}
                </li>
              )
            )}
          </ul>
        )}
      </div>
      <div className="flex-[3] flex items-center justify-center gap-3">
        <img
          className="w-[40px] h-[40px] rounded-full object-cover"
          src="https://ca.slack-edge.com/T03LBL87DA8-U03RGMLSW1L-e6bd17d33a8b-512"
          alt="profile_pictures"
        />
        <FaSearch className="text-lg cursor-pointer text-[#666]" />
      </div>
    </div>
  );
};

export default TopBar;
