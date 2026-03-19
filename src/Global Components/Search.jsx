import React from "react";

const Search = () => {
  return (
    <div className="flex items-center h-10 w-full p-3 bg-white rounded-lg overflow-hidden pl-4 shadow-md cursor-pointer">
      <label htmlFor="input" className="px-3 cursor-pointer">
        <svg className="w-3.25" viewBox="0 0 512 512" fill="rgb(114,114,114)">
          <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path>
        </svg>
      </label>
      <input
        type="text"
        placeholder="Search Students..."
        className="w-full border-none text-lg outline-none  caret-orange-500"
      />
    </div>
  );
};

export default Search;
