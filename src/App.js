
import {useState} from 'react'
import { Box } from "@chakra-ui/layout";
import Header from "./components/Header";
import ChatFeed from "./components/ChatFeed";
import InputBox from "./components/InputBox";


function App({chat,socket,setChat,button,setButton}) {
  const [text, settext] = useState("")

  const onClickHandler=()=>{
    if(button==="Start Chat")
    {
      socket.emit("queue_in")
      setButton("Waiting")
    }
    else if(button==="Waiting")
    {

    }
    else if(button==="Stop"){
      setButton("Really?")
    }
    else if(button==="Really?"){
      socket.emit("queue_out")
      setButton("Start Chat")
    }

  }

  const onChangeHandler=(e)=>{
    if(button==="Start Chat"){

    }
    else if(button==="Waiting"){

    }
    else{
      settext(e.target.value)
    }
  }

  const onSendHandler=()=>{
    if((button==="Stop"|| button==="Really?") && text.length!==0)
    {
      socket.emit("message_hola",{text})
      setChat(chat=>[...chat,{"position":"r",text}])
      settext("")
    }
  }

  const onPressEnter=(e)=>{
    //console.log(e)
    if((button==="Stop"|| button==="Really?") && text.length && e.charCode===13)
    {
      socket.emit("message_hola",{text})
      setChat(chat=>[...chat,{"position":"r",text}])
      settext("")
    }
  }
  
  return (
    
      <div className="App">
      <Box
      w='100%'
      h='100vh'
      bgGradient='linear(red.100 0%, orange.100 25%, yellow.100 50%)'
      >
        <Header/>
        <ChatFeed chat={chat}/>
        <InputBox buttonName1={button} onClick1={onClickHandler} 
        onClick2={onSendHandler} 
        onChange={onChangeHandler}
        onClick3={onPressEnter}
        text={text}/>
      </Box>
    </div>
    
  );
}

export default App;