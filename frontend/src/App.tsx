import {ChakraProvider, } from '@chakra-ui/react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import ProjectPage from './pages/Project';
import Home from './pages/Home';


function App() {


  return (
    <>
      <ChakraProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/projects" element={<ProjectPage />} />
          </Routes>
          </Router>
      </ChakraProvider>
    </>
  )
}

export default App
