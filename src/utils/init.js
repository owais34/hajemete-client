import {io} from "socket.io-client"

let socket=null;

let eventListenersInitialized=false;

export const getSocket=()=>{
    if(socket==null)
    {
        console.log("Making first connection")
        socket=io("https://hajimete-chat.herokuapp.com/")

    }
    //console.log(socket.id)
    return socket;
}

export const getStatus=()=>{
    return eventListenersInitialized
}

export const setStatus=()=>{
    eventListenersInitialized=true;
}