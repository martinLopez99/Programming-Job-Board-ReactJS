import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'
import './index.css';
//import App from './App'; // Modificar
import Home from './views/Home';
import About from './views/About';
import PostJob from './views/postJob';
import Footer from './views/Footer';
import Header from './views/Header';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider>
    <Header></Header>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/postJob" element={<PostJob />} />
      </Routes>
    </BrowserRouter>
    <Footer></Footer>
  </ChakraProvider>
);

