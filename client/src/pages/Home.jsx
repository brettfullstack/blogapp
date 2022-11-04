import React from "react";
import { Header, Posts, Sidebar } from "../components";

const Home = () => {
  return (
    <>
      <Header />
      <div className="flex">
        <Posts />
        <Sidebar />
      </div>
    </>
  );
};

export default Home;
