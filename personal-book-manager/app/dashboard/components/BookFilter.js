export default function BookFilter({ filter, setFilter, count }) {
  return (
    <div className="flex justify-between items-center px-6 md:px-10 mb-4">

      <p className="text-gray-600 font-medium">
        Showing {count} book{count !== 1 ? "s" : ""}
      </p>

      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="p-2 border rounded-md bg-white hover:cursor-pointer"
      >
        <option value="all">All Books</option>
        <option value="want">📖 Want to Read</option>
        <option value="reading">📘 Reading</option>
        <option value="completed">✅ Completed</option>
      </select>

    </div>
  );
}