import { connectDB } from "@/lib/db";
import User from "@/models/user";
import bcrypt from "bcryptjs";

export async function POST(req) {
  await connectDB();

  const { name, email, password } = await req.json();

  const existingUser = await User.findOne({ email });
  if (existingUser)
    return Response.json({ message: "User already exists" }, { status: 400 });

  const hashed = await bcrypt.hash(password, 10);

  await User.create({ name, email, password: hashed });

  return Response.json({ message: "User created" });
}