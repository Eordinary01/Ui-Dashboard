// src/components/Dashboard.js
import React, { useEffect, useState } from 'react';
import { 
  Box, 
  SimpleGrid, 
  Text, 
  Link, 
  Heading, 
  Spinner, 
  Center, 
  IconButton, 
  Flex, 
  HStack, 
  Badge, 
  Avatar, 
  Button, 
  Input, 
  Select, 
  Tooltip 
} from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon, SearchIcon } from '@chakra-ui/icons';
import fetchData from '../api';

const Dashboard = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const getPosts = async () => {
      const data = await fetchData();
      setPosts(data);
      setLoading(false);
    };

    getPosts();
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts
    .filter(post => post.title.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter(post => (filter ? post.sector === filter : true))
    .slice(indexOfFirstPost, indexOfLastPost);

  // Calculate total pages
  const totalPages = Math.ceil(posts.length / postsPerPage);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return (
      <Center h="100vh">
        <Spinner size="xl" />
      </Center>
    );
  }

  return (
    <Box p={5} bg="black" color="white">
      <Flex justify="space-between" align="center" mb={6}>
        <Heading color="purple.300">Dashboard</Heading>
        <HStack spacing={3}>
          <Input 
            placeholder="Search..." 
            value={searchTerm} 
            onChange={(e) => setSearchTerm(e.target.value)} 
            bg="white" 
            color="black"
            w="200px"
            borderRadius="md"
            _hover={{ borderColor: "purple.300" }}
            _focus={{ borderColor: "purple.500", boxShadow: "0 0 0 1px purple.500" }}
          />
          {/* <Button
            leftIcon={<SearchIcon />}
            colorScheme="purple"
            variant="solid"
            onClick={() => {}}
          >
            Search
          </Button> */}
          <Select 
            placeholder="Filter by sector" 
            value={filter} 
            onChange={(e) => setFilter(e.target.value)} 
            bg="white" 
            color="black"
            borderRadius="md"
            _hover={{ borderColor: "purple.300" }}
            _focus={{ borderColor: "purple.500", boxShadow: "0 0 0 1px purple.500" }}
          >
            <option value="Retail">Retail</option>
            <option value="Energy">Energy</option>
            <option value="Environment">Environment</option>
            <option value="Financial services">Financial services</option>
          </Select>
        </HStack>
      </Flex>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={5}>
        {currentPosts.map((post) => (
          <Box 
            key={post._id} 
            p={5} 
            shadow="md" 
            borderWidth="1px" 
            borderRadius="md" 
            bg="purple.900" 
            _hover={{ bg: "purple.700", transform: "scale(1.05)" }}
            transition="all 0.2s"
          >
            <Heading fontSize="xl" color="purple.300">{post.title}</Heading>
            <Text mt={4}>{post.insight}</Text>
            <Flex mt={4} alignItems="center">
              <Avatar name={post.source} size="sm" mr={2} />
              <Text fontWeight="bold">{post.source}</Text>
            </Flex>
            <Badge mt={4} colorScheme="purple">{post.sector || 'N/A'}</Badge>
            <Text mt={2}>
              <strong>Region:</strong> {post.region}
            </Text>
            <Text mt={2}>
              <strong>Country:</strong> {post.country || 'N/A'}
            </Text>
            <Text mt={2}>
              <strong>Pestle:</strong> {post.pestle}
            </Text>
            <Tooltip label="Read more" aria-label="Read more tooltip">
              <Link mt={2} color="purple.200" href={post.url} isExternal>
                Read more
              </Link>
            </Tooltip>
          </Box>
        ))}
      </SimpleGrid>
      <Flex justify="center" mt={5}>
        <HStack spacing={2}>
          <IconButton 
            icon={<ChevronLeftIcon />} 
            onClick={() => paginate(currentPage - 1)} 
            isDisabled={currentPage === 1} 
            bg="purple.500" 
            color="white" 
            _hover={{ bg: "purple.700" }}
          />
          <IconButton 
            icon={<ChevronRightIcon />} 
            onClick={() => paginate(currentPage + 1)} 
            isDisabled={currentPage === totalPages} 
            bg="purple.500" 
            color="white" 
            _hover={{ bg: "purple.700" }}
          />
        </HStack>
      </Flex>
    </Box>
  );
};

export default Dashboard;
