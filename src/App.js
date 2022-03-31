import React from 'react';
import {
  ChakraProvider,
  Box,
  Grid,
  theme,
} from '@chakra-ui/react';
// import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Header } from './Comp/Header';
import { Footer } from './Comp/Footer';
import { Content } from './Comp/Content';
function App() {
  return (
<ChakraProvider theme={theme}>
  <Box textAlign="center" fontSize="xl">
   <Grid minH="1  0vh" >
    {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
    <Header/>
    <Content/>
    <Footer/>
    </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
