import { Box, Text } from "@chakra-ui/layout";
import React from "react";

export default function Header() {
  return (
    <Box boxShadow="outline" height="12%">
      <Text
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
        fontSize="5xl"
        fontWeight="extrabold"
        align="center"
        
      >
        Hajimete
      </Text>
      </Box>
  );
}
