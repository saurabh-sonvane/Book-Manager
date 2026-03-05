import { connectDB } from "@/lib/db";
import User from "@/models/user";
import bcrypt from "bcryptjs";
import { signToken } from "@/lib/jwt";
import { cookies } from "next/headers";

export async function POST(req) {
  await connectDB();

  const { email, password } = await req.json();

  const user = await User.findOne({ email });
  if (!user)
    return Response.json({ message: "Invalid credentials" }, { status: 400 });

  const valid = await bcrypt.compare(password, user.password);
  if (!valid)
    return Response.json({ message: "Invalid credentials" }, { status: 400 });

  const token = signToken(user._id);

  const cookieStore = await cookies();

  cookieStore.set("token", token, {
    httpOnly: true,
    secure: false,  //it should be true in production environment (https) (use process.env)
    sameSite: "strict",
    path: "/",
  });
 
  return Response.json({ message: "Login successful" });
}
