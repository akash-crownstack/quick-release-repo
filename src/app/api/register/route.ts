import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import { db } from "@/lib/db";
import { NextApiResponse } from "next";

export async function POST(request: Request, res: NextApiResponse) {
  try {
    const body = await request.json();
    const hashedPassword = await hash(body.password, 10);
    const existingEmail = await db.user.findUnique({
      where: { email: body.email },
    });
    const existingOrgName = await db.organisation.findUnique({
      where: { name: body.orgName },
    });
    if (existingEmail) {
      return NextResponse.json({
        status: 400,
        message: "Email already exists",
      });
    }
    if (existingOrgName) {
      return NextResponse.json({
        message: "Organisation already exists",
        status: 400,
      });
    }
    const organisation = await db.organisation.create({
      data: {
        name: body.orgName,
      },
    });
    const register = await db.user.create({
      data: {
        email: body.email,
        password: hashedPassword,
        firstName: body.firstName,
        lastName: body.lastName,
        organisationId: organisation.id,
      },
    });
    return NextResponse.json({
      status: 200,
      message: "Registered` Successfully",
      register,
    });
  } catch (e) {
    return NextResponse.json({ error: "Error" }, { status: 500 });
  }
}
