import { Icon } from "@iconify/react";
import PropTypes from "prop-types";
import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      isFocused: false,
      showInput: true,
    };
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    this.setState(() => {
      return {
        input: event.target.value,
      };
    });
    this.props.onSearch(event.target.value);
  }

  onInputFocus = (focus) => {
    this.setState({ isFocused: focus });
  };

  handleIconClick = () => {
    this.setState((prevState) => ({
      showInput: !prevState.showInput,
    }));
  };

  render() {
    return (
      <div className="flex items-center relative">
        <input
          type="text"
          placeholder="Cari Apa?"
          value={this.state.input}
          onChange={this.onInputChange}
          onFocus={() => this.onInputFocus(true)}
          onBlur={() => this.onInputFocus(false)}
          className="input input-bordered  w-full max-w-xs focus:outline-none"
        />
        <Icon
          icon={"mdi:magnify"}
          className={`text-white lg:text-base-300 absolute right-[5px] lg:left-[80%] sm:left-[60%] text-2xl sm:glow  ${
            this.state.isFocused ? "opacity-0" : "opacity-100"
          }`}
        />
      </div>
    );
  }
}

export default Search;

Search.propTypes = {
  onSearch: PropTypes.func,
};
