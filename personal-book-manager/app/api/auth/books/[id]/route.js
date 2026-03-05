import { connectDB } from "@/lib/db";
import Book from "@/models/book";
import { verifyToken } from "@/lib/jwt";
import { cookies } from "next/headers";
import mongoose from "mongoose";

export async function PUT(req, { params }) {
  await connectDB();
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  const { userId } = verifyToken(token);

  const { id } = await params;
  const body = await req.json();

  const book = await Book.findOneAndUpdate(
    { _id: id, userId: new mongoose.Types.ObjectId(userId), },
    body,
    { new: true }
  );

  return Response.json(book);
}

export async function DELETE(req, { params }) {
  await connectDB();
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  const { userId } = verifyToken(token);

  const { id } = await params;

  await Book.findOneAndDelete({
    _id: id,
    userId: new mongoose.Types.ObjectId(userId),
  });

  return Response.json({ message: "Book deleted" });
}