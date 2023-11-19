import { HStack, Image} from '@chakra-ui/react'
import logo from '../assets/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';
// import SearchInput from './SearchInput';


const NavBar = () => {
  return (
    // // HStak creates horisontal stacks
    // justifyContent sets the ratio for the navBar elements
     <HStack  padding='10px'>
        {/* // images needs to be imported first, than an be referenced
            // boxsize sets the image size */}
        <Image src ={logo} boxSize='60px'></Image>
        {/* // SearchInput is disabled now */}
        {/* <SearchInput></SearchInput> */}
        <ColorModeSwitch></ColorModeSwitch>
        
     </HStack>
  )
}

export default NavBar