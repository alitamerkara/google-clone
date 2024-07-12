import React from "react";
import { newContext } from "../Context";
import SearchGoogleHook from "../SearchGoogleHook";
import { FaSearch } from "react-icons/fa";
import { FaMicrophone } from "react-icons/fa";
import { FaRegNewspaper } from "react-icons/fa6";
import { FaImages } from "react-icons/fa";
import { AiFillShopping } from "react-icons/ai";
import { IoLocationSharp } from "react-icons/io5";
import { IoMdMore } from "react-icons/io";
import { Link } from "react-router-dom";

const Search = () => {
  const { input } = newContext();
  const { data } = SearchGoogleHook(input);
  console.log(data);
  return (
    <>
      <div className="flex flex-col  border-b-[2px] text-slate-600">
        <div className="flex gap-8 m-3 mb-10 items-center">
          <Link to="/" className="mt-8">
            <img
              src="https://www.freepnglogos.com/uploads/google-logo-new-history-png-9.png"
              width="130px"
              alt="Google Logo"
            />
          </Link>
          <div className="flex mt-6 border w-1/2 justify-between align-center px-6 py-4 rounded-3xl text-l gap-3">
            <FaSearch className="mt-1 cursor-pointer" />
            <input
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
              type="text"
              className="border-none focus:outline-0 w-11/12 mx-2"
            />
            <FaMicrophone className="mt-1 cursor-pointer" />
          </div>
        </div>
        <div className="flex justify-between items-center mx-10 mb-3">
          <div className="flex gap-4">
            <Link className="flex gap-2 items-center">
              <FaSearch />
              All
            </Link>
            <Link
              className="flex gap-2 
             items-center"
            >
              <FaRegNewspaper />
              News
            </Link>
            <Link className="flex gap-2 items-center">
              <FaImages />
              Images
            </Link>
            <Link className="flex gap-2 items-center">
              <AiFillShopping />
              Shopping
            </Link>
            <Link className="flex gap-2 items-center">
              <IoLocationSharp />
              Maps
            </Link>
            <Link className="flex gap-2 items-center">
              <IoMdMore />
              More
            </Link>
          </div>
          <div className="flex gap-3">
            <Link>Settings</Link>
            <Link>Tools</Link>
          </div>
        </div>
      </div>
      {data && (
        <div className="text-slate-400 mb-5">
          About {data.searchInformation.formattedTotalResults} results (
          {data.searchInformation.formattedSearchTime} sec) for
        </div>
      )}
      {data?.items.map((item) => (
        <div className="m-5">
          <h1 className="text-sky-600 hover:underline">
            <a href={item.displayLink}>{item.title}</a>
          </h1>
          <a className="text-sky-600 underline" href={item.displayLink}>
            {item.displayLink}
          </a>
          <p>{item.snippet}</p>
        </div>
      ))}
    </>
  );
};

export default Search;
