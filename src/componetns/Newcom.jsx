import React, { useEffect, useState } from "react";
export default function Newcom(){
    const [user,setuser]=useState([])

    useEffect(()=>{
     fetch('https:dfaoijfjajeklk')
     .then(res=>res.json())
     .then(data=>setuser(data))
     .catch(err=>console.log('error inn fetching',err))
    },[])
    return(
        <>
        <div>
            {
                user.map((user,i)=>(
                    <li key={user.i}>{user.name}</li>
                ))
            }
        </div>

        </>
    )
}