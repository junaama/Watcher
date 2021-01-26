import React, {useEffect, useState} from 'react'
import axios from 'axios'
import apiUrl from "../../apiConfig";

const Schedule = () => {
    const [info, setInfo] = useState([]);


    useEffect( ()=> {
       const makeApiCall = async () => {
           try {
               const res = await axios.get(`${apiUrl}/api/tasks`)
               
               setInfo(res.data.tasks)
             
           } catch (err) {
               console.error(err)
           }
       }
       makeApiCall()
    },[])
    console.log(info)
    const tasksArray = info.map((item)=> (
        
        <>
        
            <p>{item.date.slice(0,10)}</p>
            <p>{item.content}</p>
           <p>{item.link}</p> 
           <p>{item.link.slice(12,19) == "youtube" ? "yes" : "no" }</p>
           
           <iframe width="600" height="800" src={item.link}></iframe>
        </>
    ))
    
    return (
        <>
        {tasksArray}
        </>
    )
}

export default Schedule