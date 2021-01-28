import React, {useEffect, useState} from 'react'
import axios from 'axios'
import apiUrl from "../../apiConfig";

const Schedule = () => {
    const [info, setInfo] = useState([]);
    const [showIframe, setShowIframe] = useState(false);

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


    const setIframe = (link, content)=> {
        console.log("in here")
        if(link.slice(12,19) === "youtube"){
            const id = link.slice(32, 43);
            const newLink = `https://youtube.com/embed/${id}`
            return (
                <iframe width="800" height="600" src={newLink}  allowFullScreen title={content} frameBorder="0" allow="autoplay; encrypted-media"></iframe>
            )
        } else {
            return (
                <iframe width="800" height="600" src={link} title={content}></iframe>
            )
        }
    }
    
    const tasksArray = info.map((item)=> (
        <>
            <p>{item.date.slice(0,10)}</p>
            <p>{item.content}</p>
           <p>{item.link}</p> 
           <button onClick={()=> setShowIframe(true)}>SHOW</button>
           <button onClick={()=> setShowIframe(false)}>HIDE</button>
           {showIframe ? setIframe(item.link, item.content) : "Hidden"}
           
        </>
    ))
    
    return (
        <>
        {tasksArray}
        </>
    )
}

export default Schedule