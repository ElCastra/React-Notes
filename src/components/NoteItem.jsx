import PropTypes from "prop-types";
import ArchiveBtn from "./Button/ArchiveBtn";
import DeleteBtn from "./Button/DeleteBtn";

export default function NoteItem({
  id,
  note,
  onArchive,
  onDelete,
  onUnarchive,
  archived,
}) {
  const waktuIndo = (date) => {
    return new Date(date).toLocaleDateString("id-ID", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const date = new Date();
  const formatDate = waktuIndo(date);

  return (
    <div className="card card-bordered w-[300px] border-color-3 hover:scale-110 transition-all min-h-[310px]">
      <div className="card-body text-sm">
        <h3 className="card-title break-words block">{note.title}</h3>
        <p className="flex-grow-0">{formatDate}</p>
        <p className="break-words">{note.body}</p>
        <div className="join gap-3 justify-center">
          <ArchiveBtn
            id={id}
            archived={archived}
            onArchive={onArchive}
            onUnarchive={onUnarchive}
          />
          <DeleteBtn key={id} id={id} onDelete={onDelete} />
        </div>
      </div>
    </div>
  );
}

NoteItem.propTypes = {
  id: PropTypes.string.isRequired,
  note: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
  onArchive: PropTypes.func,
  onDelete: PropTypes.func.isRequired,
  onUnarchive: PropTypes.func,
  archived: PropTypes.bool.isRequired,
};
