import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ChakraProvider} from '@chakra-ui/react'
import { ColorModeScript } from '@chakra-ui/react';
// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react"
import { UserContextProvider } from './useContext';

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  colors: {
    fontcolor: {
      100: "whitesmoke",
      // ...
      900: "#1a202c",
    },
    background:{
      teal:" #009270"
    },
    button:{
      bg:"#12752c",
      font:"white"

    },
    hover:{
      bg:"#00775b"

    },
    groupHover:{
      bg:"#defae3"
    }

  },
  
 
})





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
       <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ChakraProvider theme={theme}>
        <UserContextProvider> <App /></UserContextProvider>
     
      </ChakraProvider>
    
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
