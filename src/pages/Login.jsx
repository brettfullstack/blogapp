import React from "react";

const Login = () => {
  return (
    <div className="login w-screen">
      <div className="flex flex-col justify-center items-center h-full">
        <div className="bg-white px-10 py-[4rem] rounded-lg">
          <p className="text-4xl text-center mb-10 varela">Login</p>
          <form>
            <div className="flex flex-col">
              <label className="text-lg mb-2">E-mail</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="py-2 px-5 focus:outline-none bg-slate-300 focus:bg-slate-200 rounded-lg focus:shadow duration-300"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="text-lg mb-2 mt-2">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="py-2 px-5 focus:outline-none bg-slate-300 focus:bg-slate-200 rounded-lg focus:shadow duration-300"
                required
              />
            </div>
            <div className="flex justify-center mt-5">
              <button className="py-2 px-5 flex bg-blue-500 rounded-lg hover:bg-blue-300 text-white duration-300">
                Submit
              </button>
            </div>
          </form>
          <div className="mt-5 text-slate-400">
            If you don't have an account{" "}
            <span className="text-blue-500 cursor-pointer">Register</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
