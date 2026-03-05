"use client";

import { useState } from "react";
import toast from "react-hot-toast";

export default function BookForm({ addBook }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [status, setStatus] = useState("want");

  const handleAdd = () => {
    if (!title || !author) {
      toast.error("Please enter title and author");
      return;
    }

    addBook({ title, author, status });

    setTitle("");
    setAuthor("");
    setStatus("want");
  };

  return (
    <div className="p-6 md:p-10 flex flex-col md:flex-row gap-4 mb-4">

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
        className="p-3 border rounded-lg bg-white hover:cursor-pointer"
      >
        <option value="want">📖 Want to Read</option>
        <option value="reading">📘 Reading</option>
        <option value="completed">✅ Completed</option>
      </select>

      <button
        onClick={handleAdd}   
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 hover:cursor-pointer"
      >
        Add
      </button>

    </div>
  );
}