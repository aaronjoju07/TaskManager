import { ChakraProvider, } from '@chakra-ui/react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import ProjectPage from './pages/Project';
import Home from './pages/Home';
import { useEffect, useState } from 'react';

function App() {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    // Retrieve token from localStorage
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
    } 
  }, []);


  return (
    <>
      <ChakraProvider>

        <Router>
          {/* {token ? (
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/projects" element={<ProjectPage />} />
            </Routes>
          ) : (
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
            </Routes>
          )} */}
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/projects" element={<ProjectPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </Router>
      </ChakraProvider>
    </>
  )
}

export default App
