import React, { useState } from 'react';
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Text,
  Divider,
} from '@chakra-ui/react';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',    
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Add functionality to handle form submission here
    console.log('Form submitted:', formData);
    // You can add logic to send form data to your backend or display a success message here
  };

  return (
    <Box
      p="4"
      backgroundColor="black"
      color="white"
      minHeight="100vh"
      display="flex"
      flexDirection="column"
    >
      <Box flex="1">
        <Heading as="h1" mb="4">
          Contact Us
        </Heading>
        <form onSubmit={handleSubmit}>
          <FormControl mb="4">
            <FormLabel htmlFor="name">Name</FormLabel>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </FormControl>
          <FormControl mb="4">
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </FormControl>
          <FormControl mb="4">
            <FormLabel htmlFor="message">How can we help you?</FormLabel>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Type your message here"
              required
            />
          </FormControl>
          <Button type="submit" colorScheme="blue">
            Send
          </Button>
        </form>
        <Divider my="4" />
      </Box>
      <footer>
        <Text textAlign="center">&copy; 2023 @PRESENT. All rights reserved.</Text>
      </footer>
    </Box>
  );
}

export default ContactUs;
