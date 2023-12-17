import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PropTypes from "prop-types";
import HomePage from "./pages/HomePage";
import "./style/styles.css";
import "./style/tailwind.css";
import DetailedPage from "./pages/DetailedPage.jsx";
import NewNotesPage from "./pages/NewNotesPage.jsx";
import ArchivePage from "./pages/ArchivePage.jsx";
import NotFound from "./pages/NotFound.jsx";
import Pages404 from "./pages/Pages404.jsx";
import Swal from "sweetalert2";

import {
  addNote,
  deleteNote,
  archiveNote,
  getAllNotes,
  unarchiveNote,
} from "./utils/local-data.js";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getAllNotes(),
      searchKey: "",
    };

    this.onAddNote = this.onAddNote.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onArchive = this.onArchive.bind(this);
    this.onUnarchive = this.onUnarchive.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }

  onAddNote({ title, body }) {
    const importedNotes = addNote({ title, body });
    this.setState({ notes: [...importedNotes] });
    console.log("Submit!");
  }

  onDelete(id) {
    Swal.fire({
      title: "Yakin?",
      text: "Note yang terhapus, tidak dapat dikembalikan",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ff7890",
      cancelButtonColor: "#5ac3b0",
      confirmButtonText: "Buang, aja!",
      cancelButtonText: "Jangan Dong!",
    }).then((result) => {
      if (result.isConfirmed) {
        const importedNotes = deleteNote(id);
        this.setState({ notes: [...importedNotes] });

        Swal.fire(
          "Simsalabim! Hilang!",
          "Note telah terhapus dari daftar",
          "success",
        );
      }
    });
  }

  onArchive(id) {
    const importedNotes = archiveNote(id);
    this.setState({ notes: [...importedNotes] });
  }

  onUnarchive(id) {
    const importedNotes = unarchiveNote(id);
    this.setState({ notes: [...importedNotes] });
  }

  onSearch(word) {
    this.setState((prevState) => ({
      ...prevState,
      searchKey: word,
    }));
  }

  filterNotes = () => {
    const { searchKey } = this.state;
    return this.state.notes.filter(
      (note) =>
        !searchKey ||
        note.title.toLowerCase().includes(searchKey.toLowerCase()),
    );
  };

  render() {
    const filteredNotes = this.filterNotes();

    return (
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                onDelete={this.onDelete}
                onArchive={this.onArchive}
                onSearch={this.onSearch}
                notes={filteredNotes}
              />
            }
          />
          <Route
            path="/notes/archive"
            element={
              <ArchivePage
                onDelete={this.onDelete}
                onUnarchive={this.onUnarchive}
                onSearch={this.onSearch}
                notes={filteredNotes}
              />
            }
          />
          <Route path="/notes/:noteId" element={<DetailedPage />} />
          <Route
            path="/notes/new"
            element={<NewNotesPage onAddNote={this.onAddNote} />}
          />
          <Route path="*" element={<NotFound />} />
          <Route path="/notes/404" element={<Pages404 />} />
        </Routes>
      </Router>
    );
  }
}

App.propTypes = {
  onAddNote: PropTypes.func,
  onDelete: PropTypes.func,
  onArchive: PropTypes.func,
  onUnarchive: PropTypes.func,
  onSearch: PropTypes.func,
  notes: PropTypes.arrayOf(PropTypes.object),
};
