import React from "react";
import axios from "axios";

export default function Nav() {
  const [loading,setLoading] = React.useState(false)
  const handleLogout = async () => {
    setLoading(true)
    try {
      const response = await axios.post("/api/user/logout");
      if (response.status === 200 || response.status === 204) {
        setLoading(false)
        localStorage.removeItem('messenger')
      }
    } catch (error) {
      console.log("error in handleLogout" + error);
    }

  };
  return (
    
    <div>
      <div className=" h-[2vh] navbar bg-navbar flex justify-end p-3 pt-4">


        <div className="flex-none gap-2">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar online">
              <div className="w-16 rounded-full  hover:bg-gray-900 duration-300 ">
                <img alt="Tailwind CSS Navbar component" src="https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3383.jpg" />
              </div>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow" >
              <li>
              <button 
                  onClick={handleLogout}
                  className="text-left hover:bg-gray-100"
                >
                  Logout
                </button>
              </li>
            </ul>

          </div>
        </div>
      </div>
    </div>
  );
}
