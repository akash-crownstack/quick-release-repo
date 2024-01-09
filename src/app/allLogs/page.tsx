import { DateFormat } from "@/Utils/date-format";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Navbar } from "@/components/Navbar";
import { TypographyH3, TypographyP } from "@/components/Typography";
import { Card } from "@/components/ui/card";
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

export default async function AllLogs({ req }: any) {
  const changeLogs = await getPosts();

  return (
    <>
      <MaxWidthWrapper>
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
        <main className="grid items-center justify-center md:grid-cols-4 lg:grid-cols-4 gap-4 mt-10">
          {changeLogs.map((logs) => (
            <Link href={`/changeLog/${logs.log_id}`} key={logs.log_id}>
              <Card className="px-4 py-4 shadow-md border-2">
                <TypographyH3>{logs.title}</TypographyH3>
                <TypographyP>
                  {dayjs(logs.createdAt).format(DateFormat.LONG)}
                </TypographyP>
              </Card>
            </Link>
          ))}
        </main>
      </MaxWidthWrapper>
    </>
  );
}
