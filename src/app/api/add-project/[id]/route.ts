import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();
    const existingProject = await db.project.findFirst({
      where: { name: body.project, adminId: params.id },
    });
    if (existingProject) {
      return NextResponse.json({
        status: 400,
        message: "Project with this name already exists",
      });
    }
    const project = await db.project.create({
      data: {
        name: body.project,
        adminId: params.id,
      },
    });
    return NextResponse.json({
      status: 201,
      message: "Created Successfully",
      project,
    });
  } catch (e) {
    console.log(e, "error");
    return NextResponse.json(e, { status: 500 });
  }
}
