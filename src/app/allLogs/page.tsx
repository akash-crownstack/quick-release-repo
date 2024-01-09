import { DateFormat } from "@/Utils/date-format";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Navbar } from "@/components/Navbar";
import { TypographyH1, TypographyH3, TypographyP } from "@/components/Typography";
import { db } from "@/lib/db";
import dayjs from "dayjs";
import Link from "next/link";
import React from "react";

const getPosts = async () => {
  const response = await db.logs.findMany({
    select: {
      log_id: true,
      title: true,
      description: true,
      releaseCategory: true,
      releaseVersion: true,
      createdAt: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return response;
};

export default async function AllLogs() {
  const changeLogs = await getPosts();
  return (
    <>
      <Navbar />
      <MaxWidthWrapper>
        <div className="flex justify-between ">
          <TypographyH1>Change Logs</TypographyH1>
          <Link
            href="/changeLog/add"
            className="ml-3 inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add New
          </Link>
        </div>
        <main className="grid items-center justify-center md:grid-cols-4 lg:grid-cols-4 gap-4 mt-10">
          {changeLogs.map((logs) => (
            <Link href={`/changeLog/${logs.log_id}`} key={logs.log_id}>
              <div className="border p-4 onhover rounded-md">
                <TypographyH3>{logs.title}</TypographyH3>
                <TypographyP>
                  {dayjs(logs.createdAt).format(DateFormat.LONG)}
                </TypographyP>
              </div>
            </Link>
          ))}
        </main>
      </MaxWidthWrapper>
    </>
  );
}
