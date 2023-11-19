import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react'


// using Chakra UIs hook to toggle dark mode
const ColorModeSwitch = () => {
    const {toggleColorMode, colorMode} = useColorMode();



  return (
    
    <HStack >
        <Switch colorScheme='green' isChecked={colorMode === 'dark'} onChange={toggleColorMode} />
        <Text whiteSpace='nowrap'>Dark Mode</Text>
    </HStack>
  )
}

export default ColorModeSwitch