import Navbar from "../components/Navbar";
import NoteItem from "../components/NoteItem";
import { Link } from "react-router-dom";
import NewBtn from "../components/Button/NewBtn";
import PropTypes from "prop-types";

export default function HomePage({ notes, onDelete, onArchive, onSearch }) {
  const activeNotes = notes.filter((note) => !note.archived);

  return (
    <>
      <Navbar onSearch={onSearch} />
      <h2 className="relative top-8 mx-auto text-center text-3xl font-bold text-align ">
        Catatan Aktif
      </h2>
      {activeNotes.length ? (
        <div className="flex gap-5 flex-wrap justify-center relative top-16">
          {activeNotes.map((note) => (
            <Link key={note.id} to={`/notes/${note.id}`}>
              <NoteItem
                {...note}
                note={note}
                key={note.id}
                id={note.id}
                onArchive={onArchive}
                onDelete={onDelete}
                archived={note.archived}
              />
            </Link>
          ))}
        </div>
      ) : (
        <div className="flex gap-5 flex-wrap justify-center relative top-16">
          <p className="text-center text-3xl text-slate-500 font-bold">
            Tidak Ada Catatan
          </p>
        </div>
      )}
      <div className=" fixed bottom-10 right-10">
        <NewBtn />
      </div>

      <div className="relative top-32 text-xl text-center font-bold ">
        <h2>Made By Brillian A. | 2023</h2>
      </div>
    </>
  );
}
HomePage.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object),
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
};
