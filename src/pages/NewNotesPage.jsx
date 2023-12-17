import Navbar from "../components/Navbar";
import NoteInput from "../components/NoteInput";
import NewBtn from "../components/Button/NewBtn";
import PropTypes from "prop-types";

export default function NewNotesPage({ onAddNote }) {
  return (
    <>
      <Navbar />

      <h2 className="relative top-8 mx-auto text-center text-3xl font-bold text-align ">
        Tambah Catatan
      </h2>
      <NoteInput onAddNote={onAddNote} />
      <div className="fixed bottom-10 right-10">
        <NewBtn />
      </div>
    </>
  );
}

NewNotesPage.propTypes = {
  onAddNote: PropTypes.func.isRequired,
};
