import { Icon } from "@iconify/react";
import PropTypes from "prop-types";
import Search from "./Search";
import { Link } from "react-router-dom";

export default function Navbar({ onSearch }) {
  return (
    <>
      <div className="navbar sticky w-[90%] mx-auto top-5 rounded-lg p-1 border-color-3 bg-secondary border-6 shadow-lg z-50 ">
        <div className="navbar-start ml-10">
          <h2 className="diego md:text-2xl text-sm text-white font-bold hover:drop-shadow-lg glow">
            Catatanku Notes App
          </h2>
        </div>
        {/* Navbar End */}
        <div className="navbar-end">
          <label className="swap swap-rotate mr-6">
            <input type="checkbox" className="theme-controller" value="night" />

            <Icon
              className="swap-on fill-current md:w-10 md:h-10 w-6 h-6"
              icon="uil:moon"
            />

            <Icon
              className="swap-off fill-current md:w-10 md:h-10 w-6 h-6"
              icon="uil:sun"
            />
          </label>
          <Search onSearch={onSearch} />
          <div className="dropdown dropdown-end lg:mx-5">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost text-2xl text-white"
            >
              <Icon icon="ci:hamburger" />
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content dropdown-right mt-5 p-2 bg-color-1 text-neutral-100  rounded-box text-[18px] w-60"
            >
              <li>
                <Link className="glow outline-none" to="/notes/archive">
                  Catatan Arsip
                </Link>
              </li>
              <li>
                <Link className="glow outline-none" to="/">
                  Catatan Aktif
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

Navbar.propTypes = {
  onSearch: PropTypes.func,
  disable: PropTypes.func,
};
