import { useState } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

import { useUserContext } from '../contexts/UserContext';
import { logOut } from '../utils/firebase/auth';
import logo from '../assets/logo.svg';

const Navbar = () => {
  const { user } = useUserContext();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const link = 'font-semibold mx-2 text-default hover:text-hover';
  const active = 'font-semibold mx-2 text-hover';

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const logUserOut = () => {
    logOut();
    navigate('/');
  };

  return (
    <>
      <nav className="px-10 py-5 w-full flex justify-between items-center fixed top-0 left-0 z-10 bg-white">
        <div>
          <NavLink to="/">
            <img src={logo} alt="logo" className="w-24 h-auto" />
          </NavLink>
        </div>

        <div className="md:hidden">
          <button type="button" onClick={toggleMenu} className="outline-none">
            {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>

        <div className="hidden md:block">
          <NavLink
            to="/posts"
            className={({ isActive }) => (isActive ? active : link)}
          >
            Posts
          </NavLink>
          <NavLink
            to="/categories"
            className={({ isActive }) => (isActive ? active : link)}
          >
            Categories
          </NavLink>
          {user !== undefined ? (
            <>
              <NavLink
                to="/create"
                className={({ isActive }) => (isActive ? active : link)}
              >
                Create Post
              </NavLink>

              <button
                className="outline-none font-semibold hover:text-hover mx-2"
                onClick={logUserOut}
              >
                Logout
              </button>
            </>
          ) : (
            <NavLink
              to="auth/"
              className={({ isActive }) => (isActive ? active : link)}
            >
              Login / Sign Up
            </NavLink>
          )}
        </div>
      </nav>
      <main className="px-10 pt-20 py-10">
        <Outlet />
      </main>
    </>
  );
};
export default Navbar;
