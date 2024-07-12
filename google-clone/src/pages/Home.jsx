import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineApps } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaMicrophone } from "react-icons/fa";

const Home = () => {
  return (
    <div className="">
      <div className="flex justify-between items-center m-5 text-l ">
        <div className="left flex gap-5 decoration-inherit">
          <Link to="/about" className="hover:underline">
            About
          </Link>
          <Link to="/store" className="hover:underline">
            Store
          </Link>
        </div>
        <div className="flex gap-5 justify-center items-center">
          <Link to="/gmail" className="hover:underline">
            Gmail
          </Link>
          <Link to="/images" className="hover:underline">
            Images
          </Link>
          <Link to="/apps" className="hover:underline">
            <MdOutlineApps className="text-3xl" />
          </Link>
          <Link to="/user">
            <FaUserCircle className="text-4xl" />
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-40">
        <Link to="/">
          <img
            src="https://www.freepnglogos.com/uploads/google-logo-new-history-png-9.png"
            width="400px"
            alt="Google Logo"
          />
        </Link>

        <div className="flex mt-10 border w-1/3 justify-between align-center px-6 py-4 rounded-3xl text-l gap-3">
          <FaSearch className="mt-1 cursor-pointer" />
          <input
            type="text"
            className="border-none focus:outline-0 w-11/12 mx-2"
          />
          <FaMicrophone className="mt-1 cursor-pointer" />
        </div>
        <div className="mt-8 flex items-center gap-3">
          <button className="px-3 py-2 border bg-slate-100 rounded hover:bg-slate-200 ">
            Google Search
          </button>
          <button className="px-3 py-2 border bg-slate-100 rounded hover:bg-slate-200">
            I'm Feeling Lucky
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
