import React from "react";
import { AiFillLinkedin, AiFillInstagram, AiFillGithub } from "react-icons/ai";

const Sidebar = () => {
  return (
    <div className="hidden sm:flex flex-[3] m-5 bg-[#fdfbfb]  rounded-xl flex-col items-center">
      <div className="flex flex-col justify-center items-center">
        <span className="m-3 p-[5px] w-[80%] border-t border-b varela border-[#a7a4a4] text-base font-semibold leading-3 text-center">
          About Me
        </span>
        <img
          className="mt-[15px] rounded-full w-[10rem] h-[10rem]"
          src="https://ca.slack-edge.com/T03LBL87DA8-U03RGMLSW1L-e6bd17d33a8b-512"
          alt="profile_photo"
        />
        <p className="p-8">
          lorem loremlorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
          lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
          lorem loremloremloremloremloremlorem
        </p>
      </div>
      <div className="flex flex-col justify-center items-center w-full">
        <span className="m-3 p-[5px] w-[80%] border-t border-b varela border-[#a7a4a4] text-base font-semibold leading-3 text-center">
          Categories
        </span>
        <ul className="my-[10px] space-x-2">
          {["Coding", "Music", "E-Spor", "Game"].map((item, idx) => (
            <li className="inline-block varela" key={idx}>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col justify-center items-center w-full">
        <span className="m-3 p-[5px] w-[80%] border-t border-b varela border-[#a7a4a4] text-sm font-semibold leading-3 text-center">
          Follow me
        </span>
        <div className="flex gap-2">
          <AiFillLinkedin className="text-[25px] cursor-pointer" />
          <AiFillInstagram className="text-[25px] cursor-pointer" />
          <AiFillGithub className="text-[25px] cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
