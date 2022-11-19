# get-QR-code
 # QR code stands for Quick Response Code and is barcode type that was invented by Denso Wave in 1994.It is the quickest responce system in the world.

 # Files used - qr.html , index.js , README.md.
 # Additional file- manifest.json (to read the data  metadata about your extension such as the name and version, and can also specify aspects of your extension's functionality.
import React from 'react'
import { useState,useEffect } from 'react'
export const Delete = ({ reloadData, setreloadData }) => {
    const [state, setstate] = useState([])
    useEffect(() => {
 
     getdata()
}
, [reloadData])
 
const getdata=()=>{fetch("http://localhost:8080/product").then((res)=>{
    res.json().then((data)=>{
        console.log("data",data)
        setstate(data)
        setreloadData(false)
    })
})
}
 
    const deleteUser=(id)=>{
        fetch(`http://localhost:8080/product/${id}`,
        {
            method:'DELETE',
        }).then((res)=>{
            res.json().then((data)=>{
                console.log("item.id",data);
 
            })
        })
        getdata()
 
    }
   
  return (
    <div>
        {
            state.map((item)=><>
                <img src={item.image}></img>
                <h1>{item.name}</h1>
                <button onClick={()=>deleteUser(item.id)}>delete</button>
            </>
            )



        const deleteUser=(id)=>{
        fetch(`http://localhost:8080/product/${id}`,
        {
            method:'DELETE',
        }).then((res)=>{
            res.json().then((data)=>{
                console.log("item.id",data);
 
            })
        })
        getdata()
 
    }




