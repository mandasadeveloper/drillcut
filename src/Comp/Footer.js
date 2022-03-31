import { Box, Circle, Container, Flex, Heading, Image, Spacer} from '@chakra-ui/react'
import {ArrowUpIcon} from '@chakra-ui/icons'
import {FaFacebook,FaInstagram,FaYoutube,FaLinkedin} from 'react-icons/fa';
import {BsChatDots} from 'react-icons/bs';
import logo from "../Logo/Pos.svg"
import jobDone from "../Logo/Vector.svg"
import React from 'react'

export const Footer = () => {
  return (
    <Container maxW='100%' bg='gray.100'p='30px' position='relative'>
        <Box position='absolute' top='10px' right='20px'> 
<Circle size='40px' bg='purple.700' color='white' mb='10px'><BsChatDots/></Circle>
  <Circle size='40px' bg='white' color='black'>
    <ArrowUpIcon />
  </Circle>
</Box>
        <Box maxW='100%'>
        <Flex>
            <Image src={logo} alt="logo" />
            <Image src={jobDone} alt="logo" ml='50px'/>
        </Flex>
        </Box>
        <Box maxW='100%' p='40px 0 40px 0'>  
          <Flex>
              <Box w='100%' pr='6em'>
                  <Flex fontSize='16px' textAlign='left' >
                      <Box>
                      <strong>Our Range</strong>
                      <p>Plumbing</p>
                      <p>Electrical</p>
                      <p>HVAC</p>
                      <p>Fire Services</p>  
                      <p>Strut & Support Systems</p>
                      </Box><Spacer/>
                      <Box> 
                      <br/>                  
                      <p>Passive Fire</p>
                      <p>Fasteners & Fixings</p>
                      <p>Consumables & Safety</p>
                      <p>Tools</p>
                      <p>Special Offers</p>
                      </Box>
                  </Flex>
                </Box><Spacer/>
                <Box w='100%' pr='6em'>
                      <Flex fontSize='16px' textAlign='left' >
                      <Box>
                      <p><strong>Drillcut TV</strong></p>
                      <p><strong>Drillcut Blog</strong></p>
                      <p><strong>DownLoads</strong></p>
                      </Box><Spacer/>
                      <Box>
                      <p><strong>Contect Us</strong></p>
                      <p><strong>About Us</strong></p>
                      <p><strong>Costomer Review</strong></p>
                      </Box>
                  </Flex>
              </Box><Spacer/> 
              <Box w='20%'>
                    <Box>
                    <Heading size='sm' margin='0 0 10px 45px'>Follow Us</Heading>
                    <Flex fontSize='20px'>
                    <FaFacebook/><Spacer/>
                    <FaInstagram/><Spacer/>
                    <FaYoutube/><Spacer/>
                    <FaLinkedin/>
                    </Flex>
                    </Box>
              </Box>
          </Flex>
        </Box>
    </Container>
)}
