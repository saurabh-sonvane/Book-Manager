import { connectDB } from "@/lib/db";
import Book from "@/models/book";
import { verifyToken } from "@/lib/jwt";
import { cookies } from "next/headers";

export async function GET() {
  await connectDB();
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  const { userId } = verifyToken(token);

  const books = await Book.find({ userId });

  return Response.json(books);
}

export async function POST(req) {
  await connectDB();

    const cookieStore = await cookies();
   
  const token = cookieStore.get("token")?.value;
  const { userId } = verifyToken(token);

  const data = await req.json();

  const book = await Book.create({ ...data, userId });

  return Response.json(book);
}