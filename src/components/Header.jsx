import React, { useState } from "react";

const Header = ({ onSearch }) => {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(search);
    onSearch(search);

    setSearch("");
  };
  return (
    <div className="flex flex-col items-center gap-3 p-3 text-white bg-blue-500 w-full capitalize sm:flex-row sm:justify-between sm:px-6 md:px-10 md:py-4 lg:px-16 lg:py-5  ">
      <h2 className=" text-2xl font-bold sm:text-2xl md:text-3xl lg:text-4xl ">
        leigh dynasty recipes
      </h2>
      <form onSubmit={onSubmit}>
        <input
          onChange={handleSearch}
          value={search}
          className=" border p-1 capitalize rounded border-gray-300 text-black sm:w-48 md:w-60 lg:w-72 outline-0"
          type="text"
          placeholder="search recipe"
        />
        <button className=" px-2 bg-gray-500 py-1 mx-1 rounded capitalize cursor-pointer md:px-3 lg:px-4 ">
          search
        </button>
      </form>
    </div>
  );
};

export default Header;
