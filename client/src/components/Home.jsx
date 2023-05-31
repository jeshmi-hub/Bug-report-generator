import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
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
        {localStorage.getItem('user') !== null?
        (
          <div className="flex space-x-8">
            {[
                ['Home', '/'],
                ['Login', '/Login'],
                ['Register', '/Register'],
            ].map(([title, url]) => (
            <Link to={url} className=" text-white rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-sky-400 hover:text-white">{title}</Link>
             ))}
          </div>
        ):(
          <div className="flex space-x-8">
          {[
              ['Home', '/'],
              ['Logout', '/Register'],
          ].map(([title, url]) => (
          <Link to={url} className=" text-white rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-sky-400 hover:text-white">{title}</Link>
           ))}
        </div>
        )
      }
        </nav>
        <div class="flex">
           <div class="flex-none w-1/2">
            <img src="./images/h2.png" alt="picture" class="w-1/2 h-auto p-2" className="image"/>
            <h3 className="text-black text-2xl p-6 font-medium font-Roboto text-center">What is bug report?</h3>
            <p className="text-black text-xl p-2 font-light font-Roboto text-center">
                Bug reporting is an effective way to let software developers know about issues with their software.Bug reporting can help software developers fix the bug and make the software more reliable.<br/></p>
           </div>
           <div class="flex-initial w-1/2">
            <h1 className="text-white text-3xl p-6 font-extrabold font-Roboto">Bug Report Generator</h1>
            <h2 className="text-white text-3xl p-2 font-semibold font-Roboto">Don't fix bugs later; fix them now.</h2>
            <div class="flex justify-center">
                <button class="bg-white text-sky-600 shadow-lg shadow-sky-400/40 ... p-2 rounded-full hover:bg-sky-400 hover:text-white m-10"><Link to="/bugForm">Bug Generator</Link></button>
            </div>
           </div>
        </div>
        <footer>&copy;copyright@2023 belongs to the author themselves </footer>
    </div>
  )
}

export default Home