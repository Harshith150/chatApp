import React from "react";
import { CiSearch } from "react-icons/ci";


function Search() {
  return (
    <div className="h-[10vh] px-6 py-4">
      <form action="">
      <div className="flex space-x-3">
        <label className="border-[1px] border-gray-700 bg-slate-900 rounded-lg w-[80%] p-3 flex items-center gap-2">
          <input type="text" className="grow outline-none bg-slate-900" placeholder="Search" />
        </label>
        <button>
          <CiSearch className="text-5xl p-2 hover:bg-gray-600 rounded-full duration-300"/>
        </button>
      </div>
      </form>
    </div>
  );
}

export default Search;