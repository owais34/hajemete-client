import { Box } from '@chakra-ui/layout'
import React,{useEffect,useRef} from 'react'
import Background from '../resources/images/wstapp.jpg'
import ChatText from './ChatText'

export default function ChatFeed({chat}) {

    const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [chat]);
    return (
        <Box width="100%" height="80%" backgroundImage={`url(${Background})`} backgroundRepeat="true" >
            <Box width="100%" height="100%" backgroundColor="rgba(255, 255, 255, 0.8)" display="flex" 
            flexDirection="column" overflow="scroll">
                {
                    chat.map((chatItem,index)=>{
                        return (<ChatText position={chatItem.position} text={chatItem.text} key={index} keyI={index}/>)
                    })
                }
                <Box ref={messagesEndRef}/>
            </Box>
        </Box>
    )
}
