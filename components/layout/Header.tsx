import React from "react";


const Header = () => {
    return (
      <header className="bg-white shadow-md p-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-2xl font-bold text-blue-500">StayFinder</div>
        <input
          type="text"
          placeholder="Search locations..."
          className="border px-4 py-2 rounded-md mt-2 md:mt-0 md:mx-4 w-full md:w-1/3"
        />
        <div className="flex gap-4 mt-2 md:mt-0">
          <button className="text-sm text-blue-600 hover:underline">Sign In</button>
          <button className="text-sm text-white bg-blue-500 px-3 py-1 rounded-md hover:bg-blue-600">Sign Up</button>
        </div>
      </header>
    );
  };
  
  export default Header;
  