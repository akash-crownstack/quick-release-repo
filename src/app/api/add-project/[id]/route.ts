import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();
    const existingProject = await db.project.findFirstOrThrow({
      where: { name: body.project, adminId: params.id },
    });
    if (existingProject) {
      return new Response(`Projects with this Name Already Exists`);
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
    return NextResponse.json({ error: "Error" }, { status: 500 });
  }
}
