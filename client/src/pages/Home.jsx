import React, { useState, useEffect } from "react";
import { Header, Posts, Sidebar } from "../components";
import axios from "axios";

const Home = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const res = await axios.get("/posts");
    console.log(res);
  };
  useEffect(() => {
    fetchPosts();
  }, []);

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
