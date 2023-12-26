import axios from 'axios'
import React, {useEffect,useState} from 'react'

function Methods(){

    const[users,setUsers]=useState([]);
    const[name,setName]=useState("")

    //set
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{
            setUsers(res.data)
            console.log(res.data);
        })
    },[])

    //Post
    const PostData=(e)=>{
        e.preventDefault()
        axios.post("https://jsonplaceholder.typicode.com/users" ,{name:name})
        .then((res)=>{
            setUsers([...users,res.data])
            console.log(res.data);
        })
        console.log("Data Posted");
    }

    //Update
    const UpdateData=(e)=>{
        e.preventDefault()
        axios.patch(`https://jsonplaceholder.typicode.com/users/${5}` ,{name:name})
        .then((res)=>{
            setUsers(res.data)
            console.log(res.data);
        })
        console.log("Data Updated");
    }


    //Delete
    const DeleteData=(e)=>{
        e.preventDefault()
        axios.delete(`https://jsonplaceholder.typicode.com/users/${7}` ,{name:name})
        .then((res)=>{
            setUsers(res.data)
            console.log(res.data);
        })
        console.log("Data Deleted");
    }

    return(
        <div>
            {/* {
                users.map((user,i)=>(
                    <div key={i}>
                        <p>{user.name}</p>
                    </div>
                ))
            } */}

            {users.name}
            <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/>

            <button onClick={PostData}>Post</button> 

            <button onClick={UpdateData}>Update</button>

            <button onClick={DeleteData}>Delete</button>
        </div>
    )
}
export default Methods;