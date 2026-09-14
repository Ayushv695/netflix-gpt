import React from "react";
import Header from "./Header";
import { BG_URL } from "../utils/constant";

const Signup = () => {
  return (
    <div>
      <Header></Header>
      <div className="absolute">
        <img src={BG_URL} alt="" />
      </div>
      <form
        action=""
        className="w-4/12 p-12 bg-black absolute my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">Sign In</h1>
        <input
          type="text"
          placeholder="Email Address"
          name="email"
          className="p-2 my-4 w-full bg-gray-700"
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          className="p-2 my-4 w-full bg-gray-700"
        />
        <button className="p-4 my-6 w-full bg-red-700 rounded-lg">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Signup;
