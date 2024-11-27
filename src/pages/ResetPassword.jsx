import React, { useContext } from "react";
import logo from "/logo-inverted.png";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { Bounce, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ResetPassword = () => {
  const location = useLocation();
  const { resetPassword } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    resetPassword(email);
    toast.success(`Password reset email sent, check your email.`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
    window.open("https://mail.google.com/", "_blank");
  };
  return (
    <div>
      <ToastContainer></ToastContainer>

      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img alt="" src={logo} className="mx-auto h-20 w-auto" />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Reset your password
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            onSubmit={handleSubmit}
            action="#"
            method="POST"
            className="space-y-6"
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={location.state}
                  required
                  autoComplete="email"
                  className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="btn flex w-full justify-center rounded-md bg-indigo-600 text-sm/6 font-semibold text-white hover:bg-indigo-500"
              >
                Reset Password
              </button>
            </div>
          </form>

          <div className="divider">or</div>
          <Link to={"/login"} className="btn w-full">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
