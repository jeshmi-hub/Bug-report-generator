import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom";

const BugRecord = () => {
    const [bug, setBug] = useState([]);
    const [refresh, setRefresh] = useState(false);
    const {id} = useParams();
    const getData = async(e)=>{
        const res = await fetch(
            `http://localhost:8000/bug/${id}`,
            {
                method: "GET",
                headers: {
                    "Content-Type" : "applicaiton/json"
                },
            }
        );
        const data = await res.json();
        if(res.status === 404 || !data){
            console.log("error");
        }else{
            setBug(data);
            console.log(bug)
        }
    }

    useEffect(()=>{
        getData()
    }, [refresh]);
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
      <img src="../images/bug.png" alt="Logo" className="w-40 h-auto p-2" />
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
    <div class="bg-white shadow-2xl w-1/2 m-auto p-2">
        <div class="flex flex-col ...">
            { bug && bug.map((bug)=>{
                return(
              <>
                

           
            <div class="flex m-10">
                <div>
                <h3 class="text-sky-600 font-bold ">BugTitle : </h3>
                </div>
                <div>
                <p class="pl-2"> {bug.title} </p>
                </div>
            </div>
            <div class="flex m-10">
                <div>
                <h3 class="text-sky-600 font-bold">IssueDescription: </h3>
                </div>
                <div>
                <p class="pl-2"> {bug.description} </p>
                </div>
            </div>
            <div class="flex m-10">
                <div>
                <h3 class="text-sky-600 font-bold">OperatingSystem : </h3>
                </div>
                <div>
                <p class="pl-2"> {bug.system}</p>
                </div>
            </div>
            <div class="flex m-10">
                <div>
                <h3 class="text-sky-600 font-bold">Browser: </h3>
                </div>
                <div>
                <p class="pl-2"> {bug.browser} </p>
                </div>
            </div>
            <div class="flex m-10">
                <div>
                <h3 class="text-sky-600 font-bold">Priority : </h3>
                </div>
                <div>
                <p class="pl-2"> {bug.priority} </p>
                </div>
            </div>
            <div class="flex m-10">
                <div>
                <h3 class="text-sky-600 font-bold">Screenshoot1:</h3>
                </div>
                <div>
                <img class="pl-2 w-3/4 h-auto m-auto" src={`../images/${bug.image1}`} style={{width: "400px", height:"300px",objectFit: "cover"}} alt=''/>
                </div>
            </div>
            <div class="flex m-10">
                <div>
                <h3 class="text-sky-600 font-bold">Screenshoot2:</h3>
                </div>
                <div>
                <img class="pl-2 w-3/4 h-auto m-auto" src={`../images/${bug.image2}`} style={{width: "400px", height:"300px", objectFit: "cover"}} alt=''/>
                </div>
            </div>
            <div class="flex m-10">
                <div>
                <h3 class="text-sky-600 font-bold">BugStatus:</h3>
                </div>
                <div>
                <p class="pl-2">{bug.status}</p>
                </div>
            </div>
            </>
                )
             })
         }
        </div>
    </div>
    <div>
        <button>Back</button>
    </div>
    <footer>&copy;copyright@2023 belongs to the author themselves </footer>
    </div>
  )
}

export default BugRecord