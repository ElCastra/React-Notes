
import { Icon } from "@iconify/react";
import PropTypes from 'prop-types'

const DeleteBtn = ({ id, onDelete }) => {
  const handleDelete = (e) => {
    e.preventDefault();
    onDelete(id);

  };

  return (
    <button className="btn btn-error z-10" onClick={handleDelete}>
      <>
        <Icon icon="mdi:delete" /> Hapus
      </>
    </button>
  );
};

export default DeleteBtn;

DeleteBtn.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
}

