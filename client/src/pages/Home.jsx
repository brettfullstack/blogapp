import React, { useState, useEffect } from "react";
import { Header, Posts, Sidebar } from "../components";
import axios from "axios";
import { useLocation } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  const fetchPosts = async () => {
    await axios
      .get("/posts" + search)
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchPosts();
  }, [search]);

  return (
    <>
      <Header />
      <div className="flex">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  );
};

export default Home;
