import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="mx-auto h-fit shadow hover:shadow-xl transition duration-300 max-w-[90%] md:max-w-[60%] xl:max-w-[25%] my-5 p-5 border rounded-lg">
      <div className="flex flex-col justify-center mb-5 items-center gap-3">
        <div className="avatar ring-2 rounded-full ring-blue-600 p-1">
          <img src={user.photoURL} className="rounded-full" alt="" />
        </div>
        <h1 className="font-semibold text-xl">Welcome, {user.displayName}</h1>
      </div>
      <div>
        <h3 className="text-lg font-medium text-center mb-3">
          Your Profile Info
        </h3>
        <div className="grid grid-cols-4 border rounded-md p-2">
          <p>Name</p>
          <p className="col-span-3 opacity-70">{user.displayName}</p>
          <p>Email</p>
          <p className="col-span-3 opacity-70">{user.email}</p>
          <p>PhotoURL</p>
          <p className="overflow-x-auto whitespace-nowrap col-span-3 opacity-70">
            {user.photoURL ? user.photoURL : "Not available"}
          </p>
        </div>
      </div>
      <div className="text-right mt-4 w-full">
        <Link to={"/updateProfile"} className="btn w-full">
          Update Profile
        </Link>
      </div>
    </div>
  );
};

export default UserProfile;
