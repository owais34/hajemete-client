import { Button } from '@chakra-ui/button'
import { Input } from '@chakra-ui/input'
import { Box } from '@chakra-ui/layout'
import React from 'react'

export default function InputBox({buttonName1,onClick1,onClick2,onChange,text,onClick3}) {

    const getColor=()=>
    {
        if(buttonName1==='Start Chat')
        return "green.200"
        else if(buttonName1==='Waiting')
        return "orange.200"
        else
        return "red.200"
    }

    return (
        <Box height="8%" display="flex" >
            <Button onClick={onClick1} height="100%" border="2px darkgrey" backgroundColor={getColor()}>{buttonName1}</Button>
            <Input type="text" height="100%" placeholder="type your message" onChange={onChange} value={text} onKeyPress={onClick3}/>
            <Button onClick={onClick2} height="100%" border="2px darkgrey" backgroundColor="blue.200">Send</Button>
        </Box>
    )
}
