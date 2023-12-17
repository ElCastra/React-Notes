import { Icon } from "@iconify/react";
import PropTypes from "prop-types";

const ArchiveBtn = ({ id, onArchive, onUnarchive, archived }) => {
  const handleClick = (e) => {
    e.preventDefault();
    if (archived) {
      onUnarchive(id);
    } else {
      onArchive(id, true);
    }
  };
  return (
    <button className="btn btn-info" onClick={handleClick}>
      {archived ? (
        <>
          <Icon icon="material-symbols:unarchive-outline" />
          Kembalikan
        </>
      ) : (
        <>
          <Icon icon="material-symbols:archive-outline" />
          Arsipkan
        </>
      )}
    </button>
  );
};

export default ArchiveBtn;

ArchiveBtn.propTypes = {
  id: PropTypes.string.isRequired,
  onArchive: PropTypes.func,
  onUnarchive: PropTypes.func,
  archived: PropTypes.bool.isRequired,
};
