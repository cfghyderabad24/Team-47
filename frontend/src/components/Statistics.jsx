import React from 'react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer } from 'recharts';
import { Grid, Box, Typography } from '@mui/material';

export const sampleData = [
    { name: 'Jan', customers: 30, revenue: 2400 },
    { name: 'Feb', customers: 120, revenue: 5800 },
    { name: 'Mar', customers: 45, revenue: 3200 },
    { name: 'Apr', customers: 50, revenue: 2800 },
    { name: 'May', customers: 100, revenue: 5200 },
    { name: 'Jun', customers: 70, revenue: 4300 },
    { name: 'Jul', customers: 80, revenue: 4500 },
    { name: 'Aug', customers: 90, revenue: 4800 },
    { name: 'Sep', customers: 140, revenue: 6500 },
    { name: 'Oct', customers: 110, revenue: 5400 },
    { name: 'Nov', customers: 60, revenue: 3900 },
    { name: 'Dec', customers: 130, revenue: 6000 } 
  ];
  
const sampleImpactData = [
  { name: 'Jan', studentsReached: 200, workshops: 5, visuallyImpairedStudents: 10 },
  
  { name: 'Mar', studentsReached: 400, workshops: 8, visuallyImpairedStudents: 20 },
  
  { name: 'May', studentsReached: 600, workshops: 12, visuallyImpairedStudents: 30 },
  { name: 'Jun', studentsReached: 700, workshops: 14, visuallyImpairedStudents: 35 },
  { name: 'Feb', studentsReached: 300, workshops: 7, visuallyImpairedStudents: 15 },
  { name: 'Jul', studentsReached: 800, workshops: 16, visuallyImpairedStudents: 40 },
  { name: 'Aug', studentsReached: 900, workshops: 18, visuallyImpairedStudents: 45 },
  { name: 'Sep', studentsReached: 1000, workshops: 20, visuallyImpairedStudents: 50 },
  { name: 'Oct', studentsReached: 1100, workshops: 22, visuallyImpairedStudents: 55 },
  { name: 'Apr', studentsReached: 500, workshops: 10, visuallyImpairedStudents: 25 },
  { name: 'Nov', studentsReached: 1200, workshops: 24, visuallyImpairedStudents: 60 },
  { name: 'Dec', studentsReached: 1300, workshops: 26, visuallyImpairedStudents: 65 },
];

const sampleEngagementData = [
  { name: 'Website Visits', count: 12000 },
  { name: 'Newsletter Subscribers', count: 5000 },
  { name: 'Social Media Followers', count: 8000 },
  { name: 'Active Users', count: 3000 },
];

const sampleSatisfactionData = [
  { name: 'Very Satisfied', percentage: 50 },
  { name: 'Satisfied', percentage: 30 },
  { name: 'Neutral', percentage: 10 },
  { name: 'Dissatisfied', percentage: 5 },
  { name: 'Very Dissatisfied', percentage: 5 },
];

const Statistics = () => {
  return (
    <Box sx={{ mt: 10, mx: 5 }}>
      <Typography variant="h2" component="div" gutterBottom>
        Monthly Statistics
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" component="div" gutterBottom>
            Customers per Month
          </Typography>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={sampleData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="customers" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" component="div" gutterBottom>
            Revenue per Month
          </Typography>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={sampleData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" component="div" gutterBottom>
            Impact Statistics
          </Typography>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={sampleImpactData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="studentsReached" fill="#8884d8" />
              <Bar dataKey="workshops" fill="#82ca9d" />
              <Bar dataKey="visuallyImpairedStudents" fill="#ffc658" />
            </BarChart>
          </ResponsiveContainer>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" component="div" gutterBottom>
            User Engagement
          </Typography>
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie dataKey="count" isAnimationActive={false} data={sampleEngagementData} cx="50%" cy="50%" outerRadius={80} fill="#8884d8" label />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" component="div" gutterBottom>
            Customer Satisfaction
          </Typography>
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie dataKey="percentage" isAnimationActive={false} data={sampleSatisfactionData} cx="50%" cy="50%" outerRadius={80} fill="#82ca9d" label />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Statistics;