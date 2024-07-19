import React, {useState, useEffect} from 'react'

const ApiFetch = () => {
    const[users,setUsers] = useState([])

    useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then((data)=>setUsers(data))
    },[])

  return (
    <div>
    <ul>
      {users.map((user)=>(
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  </div>  )
}

export default ApiFetch
