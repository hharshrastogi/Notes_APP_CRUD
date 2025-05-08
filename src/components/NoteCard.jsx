const NoteCard = ({note , onDelete, onEdit }) => {
  return (
    <div className="w-64 p-4 bg-gray-50 hover:shadow-xl transition-all duration-200 border-2 rounded-2xl">
      <h2 className="text-xl font-bold mb-2">{note.title}</h2>
      <p className="text-gray-700">{note.content}</p>

      <button
        className="mt-2 bg-green-500 text-white px-4 py-1 rounded"
        onClick={() => onEdit(note)}
      >
        Edit
      </button>
      <button
        className="mt-2 bg-red-500 text-white px-4 mx-2 py-1 rounded"
        onClick={() => onDelete(note.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default NoteCard;