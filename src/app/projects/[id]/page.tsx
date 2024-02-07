"use client";
import React from "react";
import { useSession } from "next-auth/react";

const Project = () => {
  const session = useSession();
  console.log(session, "session");
  return (
    <main className="mx-auto max-w-4xl pb-10 lg:py-12 lg:px-8 md:py-8 md:px-4">
      <div className="bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-base font-semibold leading-6 text-gray-900">
            Create Your Team
          </h3>{" "}
          <div className="mt-2 w-full text-sm text-gray-500">
            <p>
              Please select a name for your team. This will be used as slug to
              create a URL for your product as well.
            </p>
          </div>{" "}
          <form className="mt-5 sm:flex sm:items-center">
            <div className="w-full sm:max-w-xs">
              <label htmlFor="email" className="sr-only">
                Email
              </label>{" "}
              <div className="mt-1 flex rounded-md shadow-sm">
                <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-gray-500 sm:text-sm">
                  release.quicklabs.in/
                </span>{" "}
                <input
                  type="text"
                  name="company-website"
                  id="company-website"
                  className="border block w-full min-w-0 flex-1 rounded-none rounded-r-md border-gray-300 px-3 py-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="skia"
                />
              </div>
            </div>{" "}
            <button
              type="submit"
              className="mt-3 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Save
            </button>
          </form>{" "}
          <p className="mt-2 text-sm text-red-600" id="email-error">
            The team name is already taken. Please select another.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Project;
