import { Box } from "@chakra-ui/react"
import { ReactNode } from "react"

interface Props {
  children: ReactNode
}

export default function GameCardContainer({ children }: Props) {
  return (
    <Box
      width="100%"
      borderRadius={10}
      overflow="hidden"
      _hover={{
        transform: "scale(1.03)",
        transition: "transform .15s ease-in",
      }}
    >
      {children}
    </Box>
  )
}
