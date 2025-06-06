import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext/AuthContext';

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        console.log('signed out successfully');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const links = (
    <>
      <li>
        <NavLink to='/' onClick={() => setDropdownOpen(false)}>
          Home
        </NavLink>
      </li>
      {/* Add other links here if needed */}
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        {/* Mobile dropdown */}
        <div className="dropdown">
          <button
            type="button"
            aria-expanded={dropdownOpen}
            aria-controls="navbar-menu"
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="btn btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
          <ul
            id="navbar-menu"
            className={`menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow ${dropdownOpen ? 'block' : 'hidden'
              }`}
          >
            {links}
          </ul>
        </div>
        <NavLink to='/' className="btn btn-ghost text-xl">
          daisyUI
        </NavLink>
      </div>

      {/* Desktop menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      {/* Auth buttons */}
      <div className="navbar-end flex gap-2">
        {user ? (
          <button className="btn" onClick={handleSignOut}>
            Sign Out
          </button>
        ) : (
          <>
            <NavLink className="btn" to="/register">
              Register
            </NavLink>
            <NavLink className="btn" to="/signIn">
              Sign In
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
