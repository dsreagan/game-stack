import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/logo.webp'
import ColorModeSwitch from './ColorModeSwitch.js'
import SearchInput from './SearchInput.js'

interface Props {
  onSearch: (searchText: string) => void
}

export default function NavBar({ onSearch }: Props) {
  return (
    <HStack padding='10px'>
        <Image src={logo} boxSize='60px' />
        <SearchInput onSearch={onSearch} />
        <ColorModeSwitch />
    </HStack>
      
  )
}
