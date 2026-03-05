"use client";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [status, setStatus] = useState("want");

  const fetchBooks = async () => {
    const res = await fetch("/api/auth/books");
    const data = await res.json();
    setBooks(data);
  };

  const addBook = async () => {
    if (!title || !author) {
      alert("Please enter title and author");
      return;
    }

    const res = await fetch("/api/auth/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, author, status }),
    });

    if (res.ok) {
      const newBook = await res.json();

      setBooks((prev) => [...prev, newBook]);

      setTitle("");
      setAuthor("");
      setStatus("want");
    }
  };

  const deleteBook = async (id) => {
    await fetch(`/api/auth/books/${id}`, {
      method: "DELETE",
    });

    setBooks((prev) => prev.filter((book) => book._id !== id));
  };

  const updateStatus = async (id, newStatus) => {
    await fetch(`/api/auth/books/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: newStatus }),
    });

    setBooks((prev) =>
      prev.map((book) =>
        book._id === id ? { ...book, status: newStatus } : book
      )
    );
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchBooks();
  }, []);

  return (
    <div className="p-6 md:p-10 bg-gray-50 min-h-screen text-black">

      <h1 className="text-3xl font-bold mb-6">📚 My Books</h1>

      {/* Add Book Form */}

      <div className="flex flex-col md:flex-row gap-4 mb-8">

        <input
          value={title}
          className="p-3 border rounded-lg flex-1"
          placeholder="Book Title"
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          value={author}
          className="p-3 border rounded-lg flex-1"
          placeholder="Author"
          onChange={(e) => setAuthor(e.target.value)}
        />

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="p-3 border rounded-lg bg-white"
        >
          <option value="want">📖 Want to Read</option>
          <option value="reading">📘 Reading</option>
          <option value="completed">✅ Completed</option>
        </select>

        <button
          onClick={addBook}
          className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
        >
          Add
        </button>

      </div>

      {/* Books Grid */}

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

        {books.length === 0 ? (
          <p className="text-gray-500">No books added yet.</p>
        ) : (
          books.map((book) => (
            <div
              key={book._id}
              className="relative bg-white p-5 rounded-xl shadow hover:shadow-lg transition"
            >

              {/* Delete Button */}

              <button
                onClick={() => deleteBook(book._id)}
                className="absolute top-3 right-3 text-red-500 hover:text-red-700"
              >
                🗑️
              </button>

              <h2 className="font-semibold text-lg">{book.title}</h2>

              <p className="text-gray-600 mb-3">{book.author}</p>

              {/* Status Dropdown */}

              <select
                value={book.status}
                onChange={(e) =>
                  updateStatus(book._id, e.target.value)
                }
                className="w-full p-2 border rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="want">📖 Want to Read</option>
                <option value="reading">📘 Reading</option>
                <option value="completed">✅ Completed</option>
              </select>

            </div>
          ))
        )}

      </div>

    </div>
  );
}