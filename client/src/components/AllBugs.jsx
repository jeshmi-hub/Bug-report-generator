import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom";
import axios from 'axios';

const AllBugs = () => {
    const {id} = useParams();
    const [bugs, setBugs] = useState([]);
    const [refresh, setRefresh] = useState(false)

    const getData = async(e)=>{
        const res = await fetch(" http://localhost:8000/bugs",
        {
            method: "GET",
            headers: {
                "Content-Type" : "application/json"
            }
        });
        const data = await res.json();
        if(res.status === 404 || !data){
            console.log("error");
        }else{
            setBugs(data);
            console.log(bugs)
        }
    };

    useEffect(()=>{
        getData()
    },[refresh]);

    const deleteBug = async(id) =>{
      const url = ` http://localhost:8000/deleteBug/${id}`;
        const res = await axios.delete(
          url
        );
        console.log(res)
      
      alert("BUg deleted successfully");
      setRefresh(!refresh)
    }
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
        <h1 class="font-extrabold text-center text-3xl text-white p-2">All Bugs</h1>
        <table class="border border-black w-11/12 m-auto">
            <thead class="border-b font-medium border-black">
            <tr>
            <th scope="col"
                class="border-r px-6 py-4 border-black">Bug Title</th>
            <th scope="col"
                class="border-r px-6 py-4 border-black">Issue Description</th>
            <th scope="col"
                class="border-r px-6 py-4 border-black">Operating System</th>
            <th scope="col"
                class="border-r px-6 py-4 border-black">Browser</th>
            <th scope="col"
                class="border-r px-6 py-4 border-black">Priority</th>
            <th scope="col"
                class="border-r px-6 py-4 border-black">Image 1</th>
            <th scope="col"
                class="border-r px-6 py-4 border-black">Image 2</th>
            <th scope="col"
                class="border-r px-6 py-4 border-black">Bug Status</th>
            <th scope="col"
                class="border-r px-6 py-4 border-black">Functionality</th>
            </tr>
            </thead>
            { bugs && bugs.map((bug)=>{
                return(
            
            <tr class="border-b font-medium border-black">
                <td scope="col"
                class="border-r px-6 py-4 border-black">{bug.title}</td>
                <td scope="col"
                class="border-r px-6 py-4 border-black">{bug.description}</td>
                <td scope="col"
                class="border-r px-6 py-4 border-black">{bug.system}</td>
                <td scope="col"
                class="border-r px-6 py-4 border-black">{bug.browser}</td>
                <td scope="col"
                class="border-r px-6 py-4 border-black">{bug.priority}</td>
                <td scope="col"
                class="border-r px-6 py-4 border-black"><img src={`../images/${bug.image1}`} style={{width:"250px", height:"250px", objectFit: "cover"}} alt="" class="w-3/4 h-auto m-auto border-2 border-black"/></td>
                <td scope="col"
                class="border-r px-6 py-4 border-black"><img src={`../images/${bug.image2}`} style={{width:"250px", height:"250px", objectFit: "cover"}} alt="" class="w-3/4 h-auto m-auto border-2 border-black"/></td>
                <td scope="col"
                class="border-r px-6 py-4 border-black">{bug.status}</td>
                 <td scope="col"
                class="border-r px-6 py-4 border-black"><div class="w-full m-auto flex justify-center p-2">
                <Link to={"/bugForm"}><button class="w-24 bg-white text-black m-1 hover:bg-sky-400  rounded-full ...">Add</button></Link>
                <Link to={`/updateBug/${bug.bug_id}`}><button class="w-24 bg-white text-black m-1 hover:bg-sky-400 rounded-full ...">Update</button></Link>
                <Link to={`/bugRecord/${bug.bug_id}`}><button class="w-24 bg-white text-black  m-1 hover:bg-sky-400 rounded-full ...">View</button></Link>
                <button class="w-24 bg-white text-black  m-1 hover:bg-sky-400 rounded-full ..." onClick={() => deleteBug(bug.bug_id)}>Delete</button>
                </div></td>
            </tr>
                )
            })
       }
        </table>
        <footer>&copy;copyright@2023 belongs to the author themselves </footer>
    </div>
  )
}

export default AllBugs