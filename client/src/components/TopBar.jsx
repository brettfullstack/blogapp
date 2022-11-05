import React, { useState, useEffect, useContext } from "react";
import { FaSearch } from "react-icons/fa";
import { BiMenu } from "react-icons/bi";
import { AiFillCloseCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";

const TopBar = () => {
  const [menu, setMenu] = useState(false);
  const [screenSize, setScreenSize] = useState(undefined);
  const { user, dispatch } = useContext(Context);

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

  const pages = [
    {
      title: "Home",
      link: "",
    },
    {
      title: "Write",
      link: "write",
    },
    {
      title: "LogOut",
      link: "",
    },
  ];
  const handleLogOut = (idx) => {
    if (idx === 2) {
      dispatch({
        type: "LOGOUT",
      });
    }
  };
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
              {pages.map((item, idx) => (
                <li
                  className={`uppercase text-lg font-light cursor-pointer hover:underline ${
                    idx === 2 && !user && "hidden"
                  }`}
                  key={idx}
                >
                  <Link to={`/${item.link}`} onClick={() => handleLogOut(idx)}>
                    {item.title}
                  </Link>
                </li>
              ))}
              <Link to="/dashboard">
                <li
                  className={`uppercase text-lg font-light cursor-pointer hover:underline ${
                    user?.username === "admin" ? "block" : "hidden"
                  }`}
                >
                  Dashboard
                </li>
              </Link>
            </ul>
          </div>
        ) : (
          <ul className="hidden sm:flex justify-center items-center gap-5">
            {pages.map((item, idx) => (
              <li
                className={`uppercase text-lg font-light cursor-pointer hover:underline ${
                  idx === 2 && !user && "hidden"
                }`}
                key={idx}
              >
                <Link to={`/${item.link}`} onClick={() => handleLogOut(idx)}>
                  {item.title}
                </Link>
              </li>
            ))}
            <Link to="/dashboard">
              <li
                className={`uppercase text-lg font-light cursor-pointer hover:underline ${
                  user?.username === "admin" ? "block" : "hidden"
                }`}
              >
                Dashboard
              </li>
            </Link>
          </ul>
        )}
      </div>
      <div className="flex-[3] flex items-center justify-center gap-3">
        {user ? (
          <Link className="link" to="/settings">
            <img
              className="w-[40px] h-[40px] rounded-full object-cover"
              src={
                user.profilePic
                  ? user.profilePic
                  : `https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500`
              }
              alt="profile_pictures"
            />
          </Link>
        ) : (
          <ul className="flex gap-3 mr-2">
            <li className="text-lg hover:underline">
              <Link to="/login">LOGIN</Link>
            </li>
            <li className="text-lg hover:underline">
              <Link to="/register">REGISTER</Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default TopBar;
