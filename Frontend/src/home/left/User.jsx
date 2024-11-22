import React from "react";

function User({user}) {
  return (
    <>
      <div className="px-5 py-7 m-1 flex space-x-4 hover:bg-slate-500 duration-300 cursor-pointer">
        <div className="avatar online">
          <div className="w-14 rounded-full">
            <img
              className="object-cover w-full h-full"
              src="https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3383.jpg"
            />
          </div>
        </div>
        <div>
          <h1>{user.name.charAt(0).toUpperCase() + user.name.slice(1)}</h1>
          <span>{user.email}</span>
        </div>
      </div>
    </>
  );
}

export default User;
