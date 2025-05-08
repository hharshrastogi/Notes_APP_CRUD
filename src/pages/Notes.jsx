import { useState, useEffect } from "react";
import NavBar from "../components/Navbar";
import NoteCard from "../components/NoteCard";

const Notes = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [notes, setNotes] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [currentNote, setCurrentNote] = useState(null);

  const handlesubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;

    if (editMode) {
      const updatednotes = notes.map((note) =>
        note.id === currentNote.id ? { ...note, title, content } : note
      );
      setNotes(updatednotes);
      setEditMode(false);
      setCurrentNote(null);
    } else {
      const newNote = {
        id: Date.now(),
        title,
        content,
      };
      setNotes([...notes, newNote]);
    }

    setTitle("");
    setContent("");
  };

  const handleDelete = (id) => {
    const updatednotes = notes.filter((note) => note.id !== id);
    setNotes(updatednotes);
  };

  const handleEdit = (note) => {
    setTitle(note.title);
    setContent(note.content);
    setEditMode(true);
    setCurrentNote(note);
  };

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    const storedNotes = localStorage.getItem("notes");
    if (storedNotes) {
      setNotes(JSON.parse(storedNotes));
    }
  }, []);
  return (
    <>
      <NavBar />
      <div className="">
        <form onSubmit={handlesubmit}>
          <div className="p-6 max-w-xl mx-auto">
            <h1 className="text-3xl font-bold mb-4">
              {editMode ? "Edit Your Note:" : "Add Your Notes Here:"}
            </h1>

            <label className="p-3 font-bold">Title:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              className="border w-full p-2 mb-2"
            />
            <label className="p-1 font-bold ">Content:</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Content"
              className="border w-full p-2 mb-2"
            />
            <button
              type="submit"
              className="bg-transparent hover:bg-black text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded"
            >
              {editMode ? "Save Changes" : "Add Note"}
            </button>

            
          </div>
        </form>
        <div className="flex flex-wrap gap-4 mx-4">
              {notes.map((note) => (
                <NoteCard
                  key={note.id}
                  note={note}
                  onDelete={handleDelete}
                  onEdit={handleEdit}
                />
              ))}
            </div>
      </div>
    </>
  );
};

export default Notes;
