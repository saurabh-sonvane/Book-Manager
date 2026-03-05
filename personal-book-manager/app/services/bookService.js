export const fetchBooksAPI = async () => {
  const res = await fetch("/api/auth/books");

  if (!res.ok) {
    throw new Error("Failed to fetch books");
  }

  return res.json();
};

export const addBookAPI = async (book) => {
  const res = await fetch("/api/auth/books", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(book),
  });

  if (!res.ok) {
    throw new Error("Failed to add book");
  }

  return res.json();
};

export const deleteBookAPI = async (id) => {
  const res = await fetch(`/api/auth/books/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error("Failed to delete book");
  }

  return res.json();
};

export const updateBookStatusAPI = async (id, status) => {
  const res = await fetch(`/api/auth/books/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ status }),
  });

  if (!res.ok) {
    throw new Error("Failed to update status");
  }

  return res.json();
};