
import './App.css';
import LargeWithLogoLeft from './Components/Every page Comp/footer';
import { Box } from '@chakra-ui/react';
import Nav from './Components/Every page Comp/navbar';

import LiveScore from './Components/LiveScrore';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import SizeExample from './Components/Every page Comp/navbar2';

function App() {
  return (
    <Box className="App">
      <Nav/>
    
      
      <SizeExample/>
      
      
      
      <BrowserRouter>
         <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/liveScore' element={<LiveScore/>}/>

         
         </Routes>
      </BrowserRouter>
     
      
     <LargeWithLogoLeft/>
    </Box>
  );
}

export default App;
