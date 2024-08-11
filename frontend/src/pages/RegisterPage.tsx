import React from 'react';
import { Box, Button, Container, FormControl, FormLabel, Input, Stack, Heading, useToast } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';

const RegisterPage: React.FC = () => {
  const navigate = useNavigate();
  const toast = useToast();

  const register = () => {
    // Replace with actual registration logic
    console.log('Registering...');

    // Simulate successful registration and redirect
    navigate('/login'); // Redirect to the home page
    toast({
      title: "Registered.",
      description: "Welcome! Please log in to continue.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="md" centerContent height="100vh" display="flex" alignItems="center" justifyContent="center">
      <Box p={6} borderWidth={1} borderRadius="md" width="100%" maxWidth="md">
        <Heading mb={6} textAlign="center">Register</Heading>
        <Stack spacing={4}>
          <FormControl>
            <FormLabel htmlFor="username">Username</FormLabel>
            <Input id="username" placeholder="Username" />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input id="password" type="password" placeholder="Password" />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="confirmPassword">Confirm Password</FormLabel>
            <Input id="confirmPassword" type="password" placeholder="Confirm Password" />
          </FormControl>
          <Button colorScheme="teal" onClick={register}>
            Register
          </Button>
        </Stack>
        <Box mt={4} textAlign="center">
          <Link to="/login">Already have an account? Login here</Link>
        </Box>
      </Box>
    </Container>
  );
};

export default RegisterPage;
