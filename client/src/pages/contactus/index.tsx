import React from 'react';
import {
  Box,
  Heading,
  List,
  ListItem,
  Link,
  Divider,
  Text,
} from '@chakra-ui/react';

function ContactUs() {
  return (
    <Box p="4"  backgroundColor="black" color="white">
      <Heading as="h1" mb="4">
        Contact Us
      </Heading>
      <Box>
        <Heading as="h2" size="md" mb="2">
          Our Team
        </Heading>
        <List styleType="none" ml="0" mb="4">
          <ListItem>
            <strong>Govind</strong>:{' '}
            <Link href="mailto:govind@example.com">govind@example.com</Link>
          </ListItem>
          <ListItem>
            <strong>Atharv</strong>:{' '}
            <Link href="mailto:atharv@example.com">atharv@example.com</Link>
          </ListItem>
          <ListItem>
            <strong>Gaurav</strong>:{' '}
            <Link href="mailto:gaurav@example.com">gaurav@example.com</Link>
          </ListItem>
        </List>
      </Box>
      <Divider my="4" />
      <footer>
        <Text>&copy; 2023 YourCompanyName. All rights reserved.</Text>
      </footer>
    </Box>
  );
}

export default ContactUs;
