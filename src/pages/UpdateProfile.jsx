import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const UpdateProfile = () => {
  const { user, setUser, updateProfileInfo, loading } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const form = new FormData(e.target);
      const name = form.get("name");
      const photoURL = form.get("photoURL");
      await updateProfileInfo(name, photoURL);
      navigate("/userProfile");
    } catch (error) {
      console.error(error);
    }
  };
  if (loading) {
    return (
      <div
        className="flex justify-center items-center"
        style={{ minHeight: "calc(100vh - 376.5px)" }}
      >
        <span className="loading loading-dots loading-lg"></span>
      </div>
    );
  }
  return (
    <div className="mx-auto h-fit shadow hover:shadow-xl  transition duration-300 max-w-[90%] md:max-w-[60%] xl:max-w-[25%] my-5 p-5 border rounded-lg">
      <div className="flex flex-col justify-center mb-5 items-center gap-3">
        <div className="ring-2 rounded-full ring-blue-600 p-1">
          <img src={user.photoURL} className="rounded-full" alt="" />
        </div>
        <h1 className="font-semibold text-xl">Hello, {user.displayName}</h1>
      </div>
      <h3 className="text-lg font-medium text-center mb-3">
        Update Your Profile Info
      </h3>
      <form onSubmit={handleSubmit} className="p-2 space-y-2">
        <label className="input input-bordered flex items-center gap-2">
          Name
          <input
            name="name"
            type="text"
            className="grow"
            required
            placeholder="John Doe"
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          PhotoURL
          <input
            name="photoURL"
            type="text"
            className="grow"
            required
            placeholder="john@doe.com/john.png"
          />
        </label>
        <button className="btn mt-4 w-full">Update Info</button>
      </form>
    </div>
  );
};

export default UpdateProfile;
