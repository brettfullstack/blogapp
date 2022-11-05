import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiFillLinkedin, AiFillInstagram, AiFillGithub } from "react-icons/ai";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [cat, setCat] = useState([]);

  const getCat = async () => {
    await axios
      .get("/categories")
      .then((res) => {
        setCat(res.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getCat();
  }, []);

  return (
    <div className="hidden sm:flex flex-[3] m-5 bg-[#fdfbfb]  rounded-xl flex-col items-center">
      <div className="flex flex-col justify-center items-center">
        <span className="m-3 p-[5px] w-[80%] border-t border-b varela border-[#a7a4a4] text-base font-semibold leading-3 text-center">
          About Me
        </span>
        <img
          className="mt-[15px] rounded-full w-[10rem] h-[10rem] object-cover"
          src="https://images.pexels.com/photos/13672084/pexels-photo-13672084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
          {cat.map((item, idx) => (
            <Link to={`/?cat=${item.name}`} key={idx}>
              <li className="inline-block varela">{item.name}</li>
            </Link>
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
