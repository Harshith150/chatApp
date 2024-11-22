import React from "react";
import User from "./User";
import userGetAllUsers from '../../context/userGetAllUsers'

function Users() {
  const [allUsers,loading] = userGetAllUsers()
  console.log(allUsers)
  return (
    <div style={{ maxHeight: "calc(84vh - 5vh)" }} className="overflow-y-auto flex-custom m-1">
      <div className="flex items-center justify-center mt-3 mb-2">
        <hr class="h-0.5 w-[98%] border-dotted bg-blue-400 border-0" />
      </div>
      {allUsers.map((user) =>  <User key={user.id} user={user} />)
      }
    </div>
  );
}

export default Users;
