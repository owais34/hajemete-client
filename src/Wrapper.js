import React,{useEffect,useState} from 'react'
import App from './App';
import { getSocket} from "./utils/init";

export default function Wrapper() {
    const socket=getSocket()
 

    useEffect(() => {
    console.log("Initialized")
    socket.on("waiting",()=>{
      setButton("Waiting")
    })
  
    socket.on("partner_found",()=>{
      setButton("Stop")
      
      setChat(chat=>[...chat,{"position":"c",text:"Stranger connected"}])
      
    })
  
    socket.on("message_hola",(payload)=>{
      setChat(chat=>[...chat,{"position":"l",text:payload.text}])
    })
  
    socket.on("partner_disconnected",(payload)=>{
      setButton("Start Chat")
      setChat(chat=>[...chat,{"position":"c",text:"Partner Disconnected"}])
    })
    return () => {
      socket.removeAllListeners('message_hola');
      socket.removeAllListeners('partner_disconnected');
      socket.removeAllListeners('partner_found')
      socket.removeAllListeners('waiting')
    }
  }, [])

  const [chat,setChat]=useState([])
  const [button,setButton]=useState("Start Chat")

    return (
        <App chat={chat} setChat={setChat} socket={socket} button={button} setButton={setButton}/>
    )
}
