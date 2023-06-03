import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams,Link } from 'react-router-dom';

const UpdateUser = () => {
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
    <nav className="fixed top-0 overflow-hidden flex justify-between items-center sm:justify-center space-x-4 p-3">
        <div className="logo">
          <img src="../images/bug.png" alt="Logo" className="w-40 h-auto p-2" />
        </div>
          <div className="flex space-x-8">
            {[
                ['Home', '/'],
                ['Login', '/Login'],
                ['Register', '/Register'],
            ].map(([title, url]) => (
            <Link to={url} className=" text-white rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-sky-400 hover:text-white">{title}</Link>
             ))}
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
