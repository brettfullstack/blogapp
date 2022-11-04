import React from "react";

const Header = () => {
  return (
    <div className="mt-[60px]">
      <div className="flex flex-col items-center lara">
        <span className="absolute top-[18%] text-[30px] text-[#444]">
          React & Node
        </span>
        <span className="absolute top-[20%] text-[100px] text-[#444]">
          Blog
        </span>
      </div>
      <img
        className="w-full h-[450px] mt-[80px] object-cover"
        src="https://images.pexels.com/photos/13541589/pexels-photo-13541589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="photos"
      />
    </div>
  );
};

export default Header;
