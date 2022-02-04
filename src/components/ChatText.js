import { Box, Text } from '@chakra-ui/layout'
import React from 'react'

export default function ChatText({text,position,keyI}) {

    const getAlignment=()=>{
        if(position==='c')
        return "center"
        else if(position==='l')
        return "flex-start"
        else
        return "flex-end"
    }

    //console.log(keyI)
    let colorI=(Number(keyI)%3)+1

    const getColor=()=>{

        //console.log(`blue.${String(colorI)}00`)
        if(position==='c')
        return `blue.${String(colorI)}00`
        else if(position==='l')
        return `pink.${String(colorI)}00`
        else
        return `purple.${String(colorI)}00`
    }

    const getSize=()=>{
        if(position==='c')
        return "12px"
        else
        return "18px"
    }
    return (
        <Box maxWidth="40%" backgroundColor={getColor()}  alignSelf={getAlignment()} margin="1.5" borderRadius="5px"
        padding="1" boxShadow="md" fontWeight="medium">
            <Text fontSize={getSize()} >
                {
                    text
                }
            </Text>
        </Box>
    )
}
