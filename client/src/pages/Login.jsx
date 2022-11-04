import axios from "axios";
import React, { useRef } from "react";
import { useContext } from "react";
import { Context } from "../context/Context";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
const Login = () => {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    await axios
      .post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      })
      .then((res) => {
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: "LOGIN_FAILURE" });
        toast.error("Something went wrong try again");
      });
  };
  return (
    <div className="login w-screen">
      <Toaster />
      <div className="flex flex-col justify-center items-center h-full">
        <div className="bg-white px-10 py-[4rem] rounded-lg">
          <p className="text-4xl text-center mb-10 varela">Login</p>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <label className="text-lg mb-2">Username</label>
              <input
                type="text"
                placeholder="Enter your username"
                className="py-2 px-5 focus:outline-none bg-slate-300 focus:bg-slate-200 rounded-lg focus:shadow duration-300"
                required
                ref={userRef}
              />
            </div>
            <div className="flex flex-col">
              <label className="text-lg mb-2 mt-2">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="py-2 px-5 focus:outline-none bg-slate-300 focus:bg-slate-200 rounded-lg focus:shadow duration-300"
                required
                ref={passwordRef}
              />
            </div>
            <div className="flex justify-center mt-5">
              <button
                disabled={isFetching}
                className="py-2 px-5 flex bg-blue-500 rounded-lg hover:bg-blue-300 text-white duration-300 disabled:cursor-not-allowed"
                type="submit"
              >
                {isFetching ? "Loading..." : "Login"}
              </button>
            </div>
          </form>
          <div className="mt-5 text-slate-400">
            If you don't have an account{" "}
            <Link to="/register">
              <span className="text-blue-500 cursor-pointer">Register</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
