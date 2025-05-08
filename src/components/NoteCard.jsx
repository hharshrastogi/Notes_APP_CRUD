const NoteCard = ({note , onDelete }) => {
  return (
    <div className="w-64 p-4 bg-white hover:shadow-xl transition-all duration-200 border rounded-2xl">
      <h2 className="text-xl font-bold mb-2">{note.title}</h2>
      <p className="text-gray-700">{note.content}</p>
      {/* <button>Edit</button> */}
      <button
        className="mt-2 bg-red-500 text-white px-4 py-1 rounded"
        onClick={() => onDelete(note.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default NoteCard;