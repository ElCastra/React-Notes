import Navbar from "../components/Navbar";
import NoteItem from "../components/NoteItem";
import { Link } from "react-router-dom";
import NewBtn from "../components/Button/NewBtn";
import PropTypes from 'prop-types';

export default function ArchivePage({ notes, onDelete, onUnarchive, onSearch }) {
  const archivedNotes = notes.filter((note) => note.archived)
  return (
    <>
      <Navbar onSearch={onSearch} />
      <h2 className="relative top-8 mx-auto text-center text-3xl font-bold text-align ">
        Arsip Catatan
      </h2>
      {archivedNotes.length ? (
        <div className="flex flex-wrap gap-5 justify-center relative top-16">
          {archivedNotes.map((note) => (
            <Link key={note.id} to={`/notes/${note.id}`}>
              <NoteItem
                id={note.id}
                note={note}
                onUnarchive={onUnarchive}
                onDelete={onDelete}
                archived={note.archived}
              />
            </Link>
          ))}
        </div>
      ) : (
        <div className="flex gap-5 flex-wrap justify-center relative top-16">
          <p className="text-center text-3xl text-slate-500 font-bold">Tidak Ada Catatan</p>
        </div>
      )}
      <div className=" fixed bottom-10 right-10">
        <NewBtn />
      </div>
    </>
  );
}

ArchivePage.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired,
  onUnarchive: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
}