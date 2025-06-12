import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext/AuthContext';

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleSignOut = () => {
    signOutUser()
      .then(() => console.log('Signed out successfully'))
      .catch(console.error);
  };

  const links = (
    <>
      <li>
        <NavLink to='/' onClick={() => setDropdownOpen(false)}>
          Home
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink to='/myApplications' onClick={() => setDropdownOpen(false)}>
            My Applications
          </NavLink>
        </li>
      )}
      {/* for recruiter. check role as well */}
      {user && (
        <>
          <li>
            <NavLink to="/addJob" onClick={() => setDropdownOpen(false)}>
              Add Job
            </NavLink>
          </li>
          <li>
            <NavLink to="/myPostedJobs" onClick={() => setDropdownOpen(false)}>
              My Posted Job
            </NavLink>
          </li>
        </>
      )}

    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        {/* Mobile menu */}
        <div className="dropdown">
          <button
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </button>
          <ul
            className={`menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ${dropdownOpen ? 'block' : 'hidden'}`}
          >
            {links}
          </ul>
        </div>
        <div className="flex items-center gap-2">
          <img
            src="/src/assets/logo.png"
            alt="Logo"
            className="w-8 h-8 object-contain"
          />
          <NavLink
            to="/"
            className="text-2xl font-bold text-primary hover:text-primary-focus transition duration-300"
          >
            Career<span className="text-neutral">Code</span>
          </NavLink>
        </div>

      </div>

      {/* Desktop menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      {/* Auth section */}
      <div className="navbar-end flex items-center gap-2">
        {user ? (
          <>
            {user.photoURL && (
              <img src={user.photoURL} alt="User" className="w-8 h-8 rounded-full" />
            )}
            <span className="hidden sm:block text-sm">{user.displayName || user.email}</span>
            <button className="btn btn-sm" onClick={handleSignOut}>
              Sign Out
            </button>
          </>
        ) : (
          <>
            <NavLink className="btn btn-sm" to="/register">Register</NavLink>
            <NavLink className="btn btn-sm" to="/signIn">Sign In</NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
