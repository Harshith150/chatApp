import React from "react";
import { IoSend } from "react-icons/io5";
function TypeMessage() {
  return (
    <div className="p-2 mt-2 flex space-x-3 text-center">
      <input
        type="text"
        placeholder="Type here"
        className="input grow outline-none bg-slate-900 input-lg rounded-lg w-[100%]"
      />
      <button className="text-4xl"><IoSend /></button>
    </div>
  );
}

export default TypeMessage;
