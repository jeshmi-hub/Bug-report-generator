import React, {useState, useEffect} from 'react'
import { Link , useParams} from 'react-router-dom';
import axios from 'axios';

const AllUsers = () => {
     const {id} = useParams();
    const [users, setUsers] = useState([]);
    const [refresh, setRefresh] = useState(false)

    const getData = async(e)=>{
        const res = await fetch(" http://localhost:8000/users",
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
            setUsers(data);
            console.log(users)
        }
    };

    useEffect(()=>{
        getData()
    },[refresh]);

    const deleteUser = async(id) =>{
      const url = ` http://localhost:8000/deleteUser/${id}`;
        const res = await axios.delete(
          url
        );
        console.log(res)
      
      alert("User deleted successfully");
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
                class="border-r px-6 py-4 border-black">Id</th>
            <th scope="col"
                class="border-r px-6 py-4 border-black">Username</th>
            <th scope="col"
                class="border-r px-6 py-4 border-black">Email</th>
            <th scope="col"
                class="border-r px-6 py-4 border-black">Functionality</th>
            </tr>
            </thead>
            { users && users.map((user)=>{
                return(
            
            <tr class="border-b font-medium border-black">
                <td scope="col"
                class="border-r px-6 py-4 border-black">{user.id}</td>
                <td scope="col"
                class="border-r px-6 py-4 border-black">{user.username}</td>
                <td scope="col"
                class="border-r px-6 py-4 border-black">{user.email}</td>
                 <td scope="col"
                class="border-r px-6 py-4 border-black"><div class="w-full m-auto flex justify-center p-2">
                <Link to={`/updateUser/${user.id}`}><button class="w-24 bg-white text-black m-1 hover:bg-sky-400 rounded-full ...">Update</button></Link>
                <Link to={`/userProfile/${user.id}`}><button class="w-24 bg-white text-black  m-1 hover:bg-sky-400 rounded-full ...">View</button></Link>
                <button class="w-24 bg-white text-black  m-1 hover:bg-sky-400 rounded-full ..." onClick={() => deleteUser(user.id)}>Delete</button>
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

export default AllUsers
