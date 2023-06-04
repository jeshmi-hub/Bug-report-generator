import axios from 'axios';
import React, { useEffect, useState, useContext } from 'react'
import { useParams,Link } from 'react-router-dom';
import { AuthContext } from '../context/authContext';

const UpdateUser = () => {
  const { currentUser, logout } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
    const [value, setValue] = useState({
        username: '',
        email: ''
    })
    const {id} = useParams();

    const handleChange = e=>{
        setValue(prev=>({...prev, [e.target.name]:e.target.value}))
    }

    const handleSubmit = async e => {
        e.preventDefault();
        try{
            await axios.put(`http://localhost:8000/updateUser/${id}`,{...value});
            alert("User updated successfully");

        }catch(err){
            alert(err.response.data)
        }
    }

    const loadUserData = async(e)=>{
        const response = await axios.get(`http://localhost:8000/user/${id}`)
        setValue(response.data[0]);
        console.log(value)
    }

    useEffect(()=>{
        loadUserData();
    },[])
  return (
    <div>
        <style>
        {`
        html, body {
          height: 100%;
          margin: 0;
          padding: 0;
          background:linear-gradient(45deg, white 0 50%, #0284C7 50% 100%);
        }
        .logo {
          margin-right: 60rem;
        }
        .content {
            padding-top: 100px;
            min-height: calc(100vh - 100px);
            overflow-y: auto;
            z-index: -1;
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
              src="../images/bug.png"
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
     <div class ="content">
    <div class="flex items-center justify-center w-6-12">
        
        <div class="font-Roboto bg-white rounded-lg shadow-lg p-8 w-6/12">
        <form class="max-w-sm mx-auto" onSubmit={handleSubmit}>         
        <h1 class="text-center text-3xl font-bold mb-4 text-sky-600">Update User</h1>
        <label class="block">
        <span class="block text-xl font-medium text-slate-700"> Username </span>
        <input type="text" name='username' value={value.username} onChange={handleChange} class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500" placeholder='Username'/>
        </label>
        <label class="block">
        <span class="block text-xl font-medium text-slate-700">Email </span>
        <input type="text" name='email' value={value.email} onChange={handleChange} class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500" placeholder='Email'/>
        </label>
       <div class="flex justify-center p-2">
                <button class="bg-sky-600 p-2 hover:bg-sky-400 text-xl rounded-md text-white">Update user</button>
            </div>
        </form>
      </div>
    </div>
    </div>
        <footer>&copy;copyright@2023 belongs to the author themselves </footer>
    </div>
  )
}

export default UpdateUser
