import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const activeProject = await db.project.findFirst({
      where: {
        isActive: true,
      },
    });
    return NextResponse.json(activeProject);
  } catch (err) {
    console.log(err, "err");
    return NextResponse.json(err);
  }
}
