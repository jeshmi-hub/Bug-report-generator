import React, {useState,useContext} from 'react';
import { Link } from "react-router-dom";
import { AuthContext } from '../context/authContext';

const BugRecords = () => {
  const { currentUser, logout } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div >
    <style>
      {`
      html, body {
        height: 100%;
        margin: 0;
        padding: 0;
        background:linear-gradient(45deg, white 0 50%, #0284C7 50% 100%);
        overflow:hidden;
      }
      .image{
        width:50%;
        height:auto;
        border-radius: 10px 50px 10px;
        box-shadow: 5px 10px rgb(2,132,199);
        margin: auto;
      }
      .logo {
        margin-right: 60rem;
      }
      .Break{
        display:flex;
        flex-direction: column;
      }
      footer {
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        background:linear-gradient(45deg, white 0 50%, #0284C7 50% 100%);
        text-align: center;
        font-weight: 600;
     }
      `}
    </style>
      
      {/* Navbar */}
      <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/" className="flex items-center">
            <img
              src="./images/bug.png"
              className="h-8 mr-3"
              alt="Bug Generator Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              BugGenerator
            </span>
          </Link>
          <div className="flex md:order-2">
            <button
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded={menuOpen ? "true" : "false"}
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className={`${
              menuOpen ? "block" : "hidden"
            } w-full md:block md:w-auto`}
            id="navbar-multi-level"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  to="/"
                  className="block py-2 pl-3 pr-4 text-white bg-sky-400 rounded md:bg-transparent md:text-sky-400 md:p-0 md:dark:text-sky-400 dark:bg-sky-400 md:dark:bg-transparent"
                  aria-current="page"
                  onClick={toggleMenu}
                >
                  Home
                </Link>
              </li>
              {currentUser ? (
                <li>
                  <Link
                    onClick={logout}
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-sky-400 md:p-0 dark:text-white md:dark:hover:text-sky-400 dark:hover:bg-sky-400 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Logout
                  </Link>
                </li>
              ) : (
                <>
                  <li>
                    <Link
                      to="/register"
                      className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-sky-400 md:p-0 dark:text-white md:dark:hover:text-sky-400 dark:hover:bg-sky-400 dark:hover:text-white md:dark:hover:bg-transparent"
                      onClick={toggleMenu}
                    >
                      Register
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/login"
                      className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-sky-400 md:p-0 dark:text-white md:dark:hover:text-sky-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                      onClick={toggleMenu}
                    >
                      Login
                    </Link>
                  </li>
                </>
              )}

                     <li>
                    <Link
                      to="/allBugs"
                      className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-sky-400 md:p-0 dark:text-white md:dark:hover:text-sky-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                      onClick={toggleMenu}
                    >
                      Bugs
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/allUsers"
                      className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-sky-400 md:p-0 dark:text-white md:dark:hover:text-sky-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                      onClick={toggleMenu}
                    >
                      Users
                    </Link>
                  </li>
            </ul>
          </div>
        </div>
      </nav>

      <div class="flex flex-col ...">
          <div class="p-4 rounded-lg flex flex-col items-center justify-center bg-white w-1/2 h-auto m-auto mb-10 shadow-2xl">
           <div class="w-full m-auto">
            <h1 class="w-full m-auto text-center">Bug report1</h1>
           </div>
           
            <div class="w-full m-auto flex justify-center p-2">
            <button class="w-24 bg-sky-600 text-white m-1 hover:bg-sky-400  rounded-full ...">Add</button>
            <button class="w-24 bg-sky-600 text-white m-1 hover:bg-sky-400 rounded-full ...">Update</button>
            <button class="w-24 bg-sky-600 text-white m-1 hover:bg-sky-400 rounded-full ...">View</button>
            <button class="w-24 bg-sky-600 text-white m-1 hover:bg-sky-400 rounded-full ...">Delete</button>
            </div>
         
          </div>
          <div class="p-4 rounded-lg flex flex-col items-center justify-center bg-white w-1/2 h-auto m-auto mb-10 shadow-2xl">
           <div class="w-full m-auto">
            <h1 class="w-full m-auto text-center">Bug report2</h1>
           </div>
           
            <div class="w-full m-auto flex justify-center p-2">
            <button class="w-24 bg-sky-600 text-white m-1 hover:bg-sky-400  rounded-full ...">Add</button>
            <button class="w-24 bg-sky-600 text-white m-1 hover:bg-sky-400 rounded-full ...">Update</button>
            <button class="w-24 bg-sky-600 text-white m-1 hover:bg-sky-400 rounded-full ...">View</button>
            <button class="w-24 bg-sky-600 text-white m-1 hover:bg-sky-400 rounded-full ...">Delete</button>
            </div>
         
          </div>
          <div class="p-4 rounded-lg flex flex-col items-center justify-center bg-white w-1/2 h-auto m-auto mb-10 shadow-2xl">
           <div class="w-full m-auto">
            <h1 class="w-full m-auto text-center">Bug report3</h1>
           </div>
           
            <div class="w-full m-auto flex justify-center p-2">
            <button class="w-24 bg-sky-600 text-white m-1 hover:bg-sky-400  rounded-full ...">Add</button>
            <button class="w-24 bg-sky-600 text-white m-1 hover:bg-sky-400 rounded-full ...">Update</button>
            <button class="w-24 bg-sky-600 text-white m-1 hover:bg-sky-400 rounded-full ...">View</button>
            <button class="w-24 bg-sky-600 text-white m-1 hover:bg-sky-400 rounded-full ...">Delete</button>
            </div>
         
          </div>
      </div>
      <footer>&copy;copyright@2023 belongs to the author themselves </footer>
    </div>
  )
}

export default BugRecords