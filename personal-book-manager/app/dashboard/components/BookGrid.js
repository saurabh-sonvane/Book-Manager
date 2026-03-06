"use client";

import { MdDelete } from "react-icons/md";

export default function BookGrid({ books, deleteBook, updateStatus }) {
  return (
    <div className="p-6 md:p-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

      {books.length === 0 ? (
        <p className="text-gray-500">No books found.</p>
      ) : (
        books.map((book) => (
          <div
            key={book._id}
            className="relative bg-white p-5 rounded-xl shadow hover:shadow-lg transition"
          >

            <button
              onClick={() => deleteBook(book._id)}
              className="absolute top-3 right-3 text-red-500 hover:text-red-700 hover:cursor-pointer"
            >
              <MdDelete size={20} />
            </button>

            <h2 className="font-semibold text-lg">{book.title}</h2>

            <p className="text-gray-600 mb-3">{book.author}</p>

            {book.tags?.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-3">

                {book.tags.slice(0, 2).map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-md"
                  >
                    {tag}
                  </span>
                ))}

                {book.tags.length > 2 && (
                  <span className="text-xs text-gray-500">
                    ...
                  </span>
                )}

              </div>
            )}

            <select
              value={book.status}
              onChange={(e) =>
                updateStatus(book._id, e.target.value)
              }
              className="w-full p-2 border rounded-md bg-gray-50 hover:cursor-pointer"
            >
              <option value="want">📖 Want to Read</option>
              <option value="reading">📘 Reading</option>
              <option value="completed">✅ Completed</option>
            </select>

          </div>
        ))
      )}

    </div>
  );
}