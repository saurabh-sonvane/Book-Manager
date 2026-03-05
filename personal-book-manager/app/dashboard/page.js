"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

import BookForm from "./components/BookForm";
import BookFilter from "./components/BookFilter";
import BookGrid from "./components/BookGrid";

import {
  fetchBooksAPI,
  addBookAPI,
  deleteBookAPI,
  updateBookStatusAPI,
} from "../services/bookService";

export default function Dashboard() {
  const router = useRouter();

  const [books, setBooks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [loadingBooks, setLoadingBooks] = useState(true);

  // Fetch books
  const fetchBooks = async () => {
    try {
      setLoadingBooks(true);
      const data = await fetchBooksAPI();
      setBooks(data);
    } catch {
      toast.error("Failed to load books");
    } finally {
      setLoadingBooks(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  // Add book
  const addBook = async (book) => {
    try {
      const newBook = await addBookAPI(book);
      setBooks((prev) => [...prev, newBook]);
      toast.success("Book added");
    } catch {
      toast.error("Failed to add book");
    }
  };

  // Delete book
  const deleteBook = async (id) => {
    try {
      await deleteBookAPI(id);
      setBooks((prev) => prev.filter((b) => b._id !== id));
      toast.success("Book deleted");
    } catch {
      toast.error("Failed to delete book");
    }
  };

  // Update status
  const updateStatus = async (id, status) => {
    try {
      await updateBookStatusAPI(id, status);

      setBooks((prev) =>
        prev.map((book) => (book._id === id ? { ...book, status } : book)),
      );

      toast.success("Status updated");
    } catch {
      toast.error("Failed to update status");
    }
  };

  // Logout
  const logout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    toast.success("Logged out");
    router.push("/login");
  };

  const filteredBooks =
    filter === "all" ? books : books.filter((book) => book.status === filter);

  return (
    <div className="bg-gray-50 min-h-screen text-black">
      {/* Header */}

      <div className="flex justify-between items-center mb-10 shadow-lg p-6">
        <h1 className="text-3xl font-bold">📚 My Books</h1>

        <button
          onClick={logout}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 hover:cursor-pointer"
        >
          Logout
        </button>
      </div>

      {/* Add Book */}

      <BookForm addBook={addBook} />

      {/* Filter */}

      <BookFilter
        filter={filter}
        setFilter={setFilter}
        count={filteredBooks.length}
      />

      {/* Books */}
      {loadingBooks ? (
        <div className="flex justify-center mt-20">
          <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <BookGrid
          books={filteredBooks}
          deleteBook={deleteBook}
          updateStatus={updateStatus}
        />
      )}
    </div>
  );
}
