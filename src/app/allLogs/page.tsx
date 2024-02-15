"use client";
import { TypographyH3, TypographyP } from "@/components/Typography";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ChangeLogCard from "@/components/ChangeLogCard";
import ChangeLogDetail from "@/components/ChangeLogDetail";
import axios from "axios";
import { Oval } from "react-loader-spinner";

export default function AllLogs() {
  const [changeLogs, setChangeLogs] = useState([]);
  const [loading, setLoading] = useState(false);
  let active = [];
  if (typeof localStorage !== "undefined") {
    const activeItem = localStorage.getItem("activeProject");
    if (activeItem) {
      active = JSON.parse(activeItem);
    }
  } else {
    console.log("localStorage is not available in this environment.");
  }
  const activeProjectId = active?.map((item: any) => item.id);

  const getChangeLogs = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`api/get-changelogs/${activeProjectId}`);
      setChangeLogs(res.data);
    } catch (err) {
      console.log(err, "err");
    }
    setLoading(false);
  };

  useEffect(() => {
    getChangeLogs();
  }, []);

  return (
    <>
      <div className="md:flex md:items-center md:justify-between py-4 px-6">
        <TypographyH3 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
          Change Logs
        </TypographyH3>
        <Link
          href="/changeLog/add"
          className="ml-3 inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Add New
        </Link>
      </div>
      <main className="border-t border-slate-300 grid justify-center md:grid-cols-3 lg:grid-cols-3 sm:grid-cols-3 xs:grid-cols-3">
        <div className="col-span-1 bg-gray-100 border border-t-0">
          {loading ? (
            <div className="flex items-center justify-center py-4">
              <Oval
                height={50}
                width={50}
                color="black"
                secondaryColor="white"
              />
            </div>
          ) : (
            <ChangeLogCard changeLogs={changeLogs} />
          )}
        </div>
        <div className="col-span-2 bg-gray-100">
          <ChangeLogDetail />
        </div>
      </main>
    </>
  );
}
