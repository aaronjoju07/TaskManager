import React from 'react';
import { Box, Button, Container, FormControl, FormLabel, Input, Stack, Heading, useToast } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const toast = useToast();

  const login = () => {
    // Replace with actual login logic
    console.log('Logging in...');

    // Simulate successful login and redirect
    navigate('/home'); // Redirect to the home page
    toast({
      title: "Logged in.",
      description: "Welcome back!",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="md" centerContent height="100vh" display="flex" alignItems="center" justifyContent="center">
      <Box p={6} borderWidth={1} borderRadius="md" width="100%" maxWidth="md">
        <Heading mb={6} textAlign="center">Login</Heading>
        <Stack spacing={4}>
          <FormControl>
            <FormLabel htmlFor="username">Username</FormLabel>
            <Input id="username" placeholder="Username" />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input id="password" type="password" placeholder="Password" />
          </FormControl>
          <Button colorScheme="teal" onClick={login}>
            Login
          </Button>
        </Stack>
        <Box mt={4} textAlign="center">
          <Link to="/register">Don't have an account? Register here</Link>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginPage;
