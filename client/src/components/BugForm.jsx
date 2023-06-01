import axios from 'axios';
import React, { useState } from 'react'

function BugForm() {
    const [value, setValue] = useState({
        title: "",
        description: "",
        system: "",
        browser:"",
        priority:"",
        status: ""
    })
    const [image1,setImg1] = useState(null);
    const [image2, setImg2] = useState(null);

    const upload = async e=>{
        try{
            const formData = new FormData();
            formData.append("file", image1);
            const res = await axios.post(" http://localhost:8000/upload", formData)
            return res.data;
        }catch(err){
            console.log(err);
        }
    }

    const upload1 = async e=>{
        try{
            const formData = new FormData();
            formData.append("file", image2)
            const res = await axios.post(" http://localhost:8000/upload", formData)
            return res.data;
        }catch(err){
            console.log(err);
        }
    }
    const handleChange = e =>{
        setValue(prev=>({...prev, [e.target.name]: e.target.value}))
    }

    const handleSubmit = async e=>{
        e.preventDefault();
        const imgUrl = await upload();
        const imgUrl1 = await upload1();
        try{
            await axios.post("http://localhost:8000/postBug",
             {...value, 
             image1: image1 ? imgUrl: "",
             image2: image2 ? imgUrl1 : ""});

            alert("Bugs added successfully");

        }catch(err){
            alert(err.response.data);
        }
    }
  return (
    <div class="flex items-center justify-center w-6-12">
        
        <div class="font-Roboto bg-white rounded-lg shadow-lg p-8 w-6/12">
        <form class="max-w-sm mx-auto" onSubmit={handleSubmit}>
        <h1 class="text-center text-3xl font-bold mb-4 text-sky-600">Bug Report Generator</h1>
        <label class="block">
        <span class="block text-xl font-medium text-slate-700"> Bug Title </span>
        <input type="text" name='title' onChange={handleChange} class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500" placeholder='Bug Title'/>
        </label>
        <label for="message" class="block mb-2 text-xl font-medium text-slate-700 text-slate-700">Issue Description</label>
        <textarea id="message" name='description' onChange={handleChange} rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500" placeholder="Write issue description..."></textarea>
        <label for="operating-systems" class="block mb-2 text-xl font-medium text-slate-700 text-slate-700">Operating system</label>
        <select id="operating-systems" name='system' onChange={handleChange} class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500">
        <option selected>Choose an operating system</option>
        <option>Windows 10</option>
        <option>Windows 11</option>
        <option>MacOs</option>
        <option>Linux</option>
        </select>
        <label for="browser" class="block mb-2 text-xl font-medium text-slate-700 text-slate-700">Browser</label>
       <select id="browser" name='browser' onChange={handleChange} class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500">
       <option selected>Choose a browser</option>
       <option>Microsoft Edge</option>
       <option>Chrome</option>
       <option>Brave</option>
       <option>Mozilla Firefox</option>
       <option>Safari</option>
       <option>Opera Mini</option>
       </select>

<h3 class="mb-4 font-semibold text-xl text-slate-700">Priority</h3>
<ul class="w-48 text-sm font-medium text-gray-900 bg-white border border-slate-200 rounded-lg  dark:border-gray-600">
    <li class="w-full border-b border-slate-200 rounded-t-lg dark:border-gray-600">
        <div class="flex items-center pl-3">
            <input id="low-priority" type="radio" value="low" name='priority' class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" onChange={handleChange}/>
            <label for="low-priority" class="w-full py-3 ml-2 text-sm font-medium text-gray-900">Low</label>
        </div>
    </li>
    <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
        <div class="flex items-center pl-3">
            <input id="medium-priority" type="radio" value="medium" name='priority' class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" onChange={handleChange}/>
            <label for="medium-priority" class="w-full py-3 ml-2 text-sm font-medium text-gray-900 ">Medium</label>
        </div>
    </li>
    <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
        <div class="flex items-center pl-3">
            <input id="high-priority" type="radio" value="high" name='priority' class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" onChange={handleChange}/>
            <label for="high-priority" class="w-full py-3 ml-2 text-sm font-medium text-gray-900 ">High</label>
        </div>
    </li>
</ul>

<label class="block mb-2 text-xl font-medium text-slate-700" type="file" name="image1" for="file_input" >Screenshot 1</label>
<input class="block w-full text-sm text-slate-900 border border-slate-300 rounded-lg cursor-pointer bg-slate-50 focus:outline-none" id="file" type="file"
 name="image1" onChange={(e) => setImg1(e.target.files[0])}></input>
<label class="block mb-2 text-xl font-medium text-slate-700" type="file" name="image2" for="file_input" >Screenshot 2</label>
<input class="block w-full text-sm text-slate-900 border border-slate-300 rounded-lg cursor-pointer bg-slate-50 focus:outline-none" id="file" type="file" name='image2' onChange={(e)=> setImg2(e.target.files[0])}></input>

<label for="browser" class="block mb-2 text-xl font-medium text-slate-700">Bug status</label>
       <select id="browser" name='status' class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" onChange={handleChange}>
       <option selected>In queue</option>
       <option>Processing</option>
       <option>Completed</option>
       </select>
       <div class="flex justify-center p-2">
                <button class="bg-sky-600 p-2 hover:bg-sky-400 text-xl rounded-md text-white">Generator Bug Report</button>
            </div>

        </form>
      </div>
    </div>
  )
}

export default BugForm
