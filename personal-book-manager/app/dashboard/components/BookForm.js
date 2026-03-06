"use client";

import { useState } from "react";
import toast from "react-hot-toast";

export default function BookForm({ addBook }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [status, setStatus] = useState("want");
  const [tags, setTags] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAdd = () => {

    const tagsarray = tags
      .split(",")
      .map((tag) => tag.trim())
      .filter(Boolean);

    if (!title || !author || tagsarray.length === 0) {
      toast.error("Please Enter all Details");
      return;
    }

    setLoading(true);

    addBook({ title, author, tags: tagsarray, status });

    setLoading(false);

    setTitle("");
    setAuthor("");
    setStatus("want");
    setTags("");
  };

  return (
    <>
      {loading ? (
        <div className="flex justify-center mt-20">
          <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="p-6 md:p-10 flex flex-col md:flex-row gap-4 mb-4 flex-wrap">
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

          <input
            value={tags}
            className="p-3 border rounded-lg flex-1"
            placeholder="Tags (comma separated)"
            onChange={(e) => setTags(e.target.value)}
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
      )}
    </>
  );
}
