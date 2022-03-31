import React from 'react'
import {FiUsers} from 'react-icons/fi';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import logo from "../Logo/Pos.svg"
import {Flex,Tab, TabList,Tabs, Spacer, Box, Container, Image, AvatarGroup, Stack, InputGroup, InputRightAddon, Input } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'
export const Header = () => {
  return (
  <>
    <Tabs>
    <TabList className='nav'>
      <Flex>
      <Tab className='menu_css'><Link to='/drillcut-tv'>Drillcut Tv</Link></Tab>
      <Tab><Link to='/blog'>Blog</Link></Tab>
      <Tab><Link to='/downloads'>DownLoads</Link></Tab>
      </Flex>
      <Spacer/>
      <Flex>
      <Tab><Link to='/about'>About</Link></Tab>
      <Tab><Link to='/contact'>Contact Us</Link></Tab>
      <Tab>1800 DRILLCUT (1800 374 552)</Tab>
      </Flex>
    </TabList>
  </Tabs>
  <Container maxW='100%' p='30px'>
  <Flex>
    <Box><Image src={logo} alt='logo'/></Box><Spacer/>
    <Box>
<Stack spacing={4}>
  <InputGroup width='30em'>
    <Input type='text' placeholder='Search For Your Product' />
    <InputRightAddon children='Search'bg='#553C9A' color='white' cursor='pointer'/>
  </InputGroup>
</Stack></Box><Spacer/>
    <AvatarGroup spacing='1rem' fontSize='25px'>
    <FiUsers/><Spacer/><AiOutlineShoppingCart/>
    </AvatarGroup>
  </Flex>
  </Container>
  <Flex bg='gray.100' fontSize='14px' p='10px' fontWeight='bold'>
  <Link to='/range'>OUR RANGE <ChevronRightIcon fontSize='19px' verticalAlign='bottom' marginRight='30px'/></Link>
  <Link to='/academy'>DRILLCUT ACADEMY<ChevronRightIcon fontSize='19px' verticalAlign='bottom' marginRight='30px'/></Link>
  <Link to='/drillclub'>DRILLCLUB <ChevronRightIcon fontSize='19px' verticalAlign='bottom' marginRight='30px'/></Link>
</Flex>
  </>
  )
}
