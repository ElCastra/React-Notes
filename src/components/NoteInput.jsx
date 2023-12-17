import React from "react";
import PropTypes from "prop-types";

export default class NoteInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      archived: "",
    };
    this.limit = 50;
  }

  onTitleChange = (event) => {
    const inputTitle = event.target.value;
    if (inputTitle.length <= this.limit) {
      this.setState((prevState) => {
        return {
          ...prevState,
          title: inputTitle,
        };
      });
    }
  };

  onBodyChange = (event) => {
    this.setState({ body: event.target.value });
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onAddNote({
      ...this.state,
      archived: false,
    });
    this.setState({
      title: "",
      body: "",
    });
  };
  render() {
    return (
      <form className="mt-5" onSubmit={this.onSubmit}>
        <p className="text-neutral-400 lg:absolute lg:left-[780px] lg:top-[160px] relative text-center top-[52px] max-w-[500px]">
          Limit: {this.limit - this.state.title.length}
        </p>
        <div className="flex flex-col justify-center items-center">
          <div className="text-center inter font-bold relative text-[20px] lg:top-3">
            Ada Tugas Baru?
          </div>
          <input
            type="text"
            placeholder="Judul Catatan"
            className="input input-bordered inter relative top-8 lg:w-[400px] w-[200px] placeholder font-bold focus:outline-none"
            value={this.state.title}
            onChange={this.onTitleChange}
            required
          />
          <textarea
            placeholder="Isi Catatanmu Disini!"
            className="textarea textarea-bordered inter lg:w-[400px] md:w-[400px] w-[200px] mx-auto my-10 h-40 placeholder focus:outline-none resize"
            value={this.state.body}
            onChange={this.onBodyChange}
            required
          />
          <button
            type="submit"
            className="text-xl btn btn-outline btn-warna btn-wide mx-auto"
          >
            Simpan
          </button>
        </div>
      </form>
    );
  }
}

NoteInput.propTypes = {
  onAddNote: PropTypes.func.isRequired,
};
