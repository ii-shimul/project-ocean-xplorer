import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div
      className="w-screen h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1545972154-9bb223aac798?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3050&q=80&exp=8&con=-15&sat=-75")',
      }}
    >
      <div className="text-white flex items-center text-center flex-col pt-20">
        <p className="text-xl mb-3 max-sm:text-lg">404</p>
        <h1 className="text-7xl mb-5 max-sm:text-3xl">Page not found</h1>
        <p className="text-2xl opacity-70 mb-4 max-sm:text-lg">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <Link to={"/"} className="btn btn-link text-white">
          ← Back to home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;