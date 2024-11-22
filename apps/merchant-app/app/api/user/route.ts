import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const client = new PrismaClient();

export const GET = async () => {
  await client.user.create({
    data: {
      email: "asd",
      name: "adsads",
      number: "1234567890",
      password: "password123",
    },
  });
  return NextResponse.json({
    message: "hi there",
  });
};
