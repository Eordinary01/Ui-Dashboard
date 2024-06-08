import React, { useEffect, useState } from 'react';
import {
  Box,
  SimpleGrid,
  Heading,
  Spinner,
  Center,
  Flex,
} from '@chakra-ui/react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement
} from 'chart.js';
import { Bar, Pie, Line } from 'react-chartjs-2';
import mockData from '../mockData'; // Import the mock data

// Register chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement
);

const Dashboard = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching data
    const fetchData = async () => {
      // Here we use mockData instead of fetching from an API
      setPosts(mockData);
      setLoading(false);
    };

    fetchData();
  }, []);

  // Prepare data for charts
  const sectorData = posts.reduce((acc, post) => {
    acc[post.sector] = acc[post.sector] ? acc[post.sector] + 1 : 1;
    return acc;
  }, {});

  const regionData = posts.reduce((acc, post) => {
    acc[post.region] = acc[post.region] ? acc[post.region] + 1 : 1;
    return acc;
  }, {});

  const intensityData = posts.reduce((acc, post) => {
    acc[post.intensity] = acc[post.intensity] ? acc[post.intensity] + 1 : 1;
    return acc;
  }, {});

  const colors = [
    'rgba(75, 192, 192, 0.6)',
    'rgba(153, 102, 255, 0.6)',
    'rgba(255, 159, 64, 0.6)',
    'rgba(54, 162, 235, 0.6)',
    'rgba(255, 206, 86, 0.6)',
    'rgba(231, 233, 237, 0.6)',
    'rgba(255, 99, 132, 0.6)',
    'rgba(75, 192, 192, 0.6)',
  ];

  const sectorChart = {
    labels: Object.keys(sectorData),
    datasets: [
      {
        label: 'Posts by Sector',
        data: Object.values(sectorData),
        backgroundColor: Object.keys(sectorData).map((_, idx) => colors[idx % colors.length]),
        borderColor: Object.keys(sectorData).map((_, idx) => colors[idx % colors.length].replace('0.6', '1')),
        borderWidth: 1,
      },
    ],
  };

  const regionChart = {
    labels: Object.keys(regionData),
    datasets: [
      {
        label: 'Posts by Region',
        data: Object.values(regionData),
        backgroundColor: Object.keys(regionData).map((_, idx) => colors[idx % colors.length]),
        borderColor: Object.keys(regionData).map((_, idx) => colors[idx % colors.length].replace('0.6', '1')),
        borderWidth: 1,
      },
    ],
  };

  const intensityChart = {
    labels: Object.keys(intensityData),
    datasets: [
      {
        label: 'Posts by Intensity',
        data: Object.values(intensityData),
        backgroundColor: 'rgba(255, 159, 64, 0.6)',
        borderColor: 'rgba(255, 159, 64, 1)',
        borderWidth: 1,
      },
    ],
  };

  if (loading) {
    return (
      <Center h="100vh">
        <Spinner size="xl" />
      </Center>
    );
  }

  return (
    <Box p={4}>
      <Flex justify="space-between" align="center" mb={4}>
        <Heading as="h1" size="lg">Dashboard</Heading>
      </Flex>
      <Box mt={8}>
        <Heading as="h2" size="md" mb={4}>Charts</Heading>
        <SimpleGrid columns={2} spacing={8}>
          <Box>
            <Heading as="h3" size="sm" mb={2}>Posts by Sector</Heading>
            <Bar data={sectorChart} />
          </Box>
          <Box>
            <Heading as="h3" size="sm" mb={2}>Posts by Region</Heading>
            <Pie data={regionChart} />
          </Box>
          <Box>
            <Heading as="h3" size="sm" mb={2}>Posts by Intensity</Heading>
            <Line data={intensityChart} />
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Dashboard;
