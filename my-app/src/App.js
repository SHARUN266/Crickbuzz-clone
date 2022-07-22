
import './App.css';
import LargeWithLogoLeft from './Components/Every page Comp/footer';
import { Box } from '@chakra-ui/react';
import Nav from './Components/Every page Comp/navbar';

import LiveScore from './Components/LiveScrore';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import SizeExample from './Components/Every page Comp/navbar2';
import MatchList from './Components/Schedule';
import SimpleCard from './Components/Every page Comp/SignIn';

import { PrivateRoute } from './Components/PrivateRoute';

function App() {
  return (
    <Box className="App">
      <Nav/>
    
      
      {/* <SizeExample/> */}
      
      
      
      <BrowserRouter>
         <Routes>
          <Route path='/' exact element={<Home/>}/>
     
      
          <Route path='/liveScore' element={<PrivateRoute><LiveScore/></PrivateRoute>}/>
          <Route path='/schedule' element={ <PrivateRoute><MatchList/></PrivateRoute> }/>
          <Route path='/SignIn'  element={ <SimpleCard/> }/>
        
       
         
         </Routes>
      </BrowserRouter>
      
    
     
      
     <LargeWithLogoLeft/>
    </Box>
  );
}

export default App;
