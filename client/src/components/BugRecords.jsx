import React from 'react';
import { Link } from "react-router-dom";

const BugRecords = () => {
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
      
      <nav className="flex justify-between items-center sm:justify-center space-x-4 p-3">
      <div className="logo">
        <img src="./images/bug.png" alt="Logo" className="w-40 h-auto p-2" />
      </div>
        <div className="flex space-x-8">
          {[
              ['Home', '/'],
              ['Login', '/Login'],
              ['Register', '/Register'],
          ].map(([title, url]) => (
          <Link to={url} className="text-white rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-sky-400 hover:text-white">{title}</Link>
           ))}
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