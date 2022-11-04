import React from "react";
import { Sidebar, SinglePost } from "../components";
const Single = () => {
  return (
    <div className="flex">
      <SinglePost />
      <Sidebar />
    </div>
  );
};

export default Single;
