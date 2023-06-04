import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/authContext'

const Login = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: ""   
})

const navigate = useNavigate();

const {login} = useContext(AuthContext);


const handleChange =  e =>{
    setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
}

const handleSubmit = async e =>{
    e.preventDefault();
    try{
        await login(inputs);
        alert("logged in successfully");
        navigate("/")
    }catch(err){
        alert(err.response.data);
    }
    
}
  return (
   <div className="flex items-center justify-center h-screen">
    <div className="font-Roboto bg-white rounded-lg shadow-lg p-8 w-6/12">
        <h1 className="text-center text-3xl font-bold mb-4 text-sky-600">Login</h1>
        <form className="max-w-sm mx-auto">
            <label className="block">
            <span className="block text-xl font-medium text-slate-700"> Email </span>
            <input type="text" class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 text-sky-600 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            name='email' onChange={handleChange}/>
            </label>
            <label className="block">
            <span className="block text-xl font-medium text-slate-700"> Password </span>
            <input type="password" class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            name='password' onChange={handleChange}/>
            </label>
            <div className="flex justify-center p-2">
                <button onClick={handleSubmit} class="bg-sky-600 p-2 hover:bg-sky-400 text-sm rounded-md text-white">Submit</button>
            </div>
        </form>
    </div>
    </div>
  )
}

export default Login;