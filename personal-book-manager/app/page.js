import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-6">

      <h1 className="text-4xl font-bold mb-4 text-black">
        📚 Personal Book Manager
      </h1>

      <p className="text-gray-600 mb-8 text-center max-w-lg">
        Track books you want to read, are reading, and have completed.
      </p>

      <div className="flex gap-4">
        <Link
          href="/login"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg"
        >
          Login
        </Link>

        <Link
          href="/signup"
          className="bg-green-600 text-white px-6 py-3 rounded-lg"
        >
          Sign Up
        </Link>
      </div>

    </div>
  );
}