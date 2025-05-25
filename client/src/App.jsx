import * as React from 'react';
import { CssBaseline, Container, Typography, AppBar, Toolbar, Button } from '@mui/material';

export default function App() {
  return (
    <>
      <CssBaseline />
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Bowery Creative
          </Typography>
          <Button color="inherit" href="#services">Services</Button>
          <Button color="inherit" href="#work">Work</Button>
          <Button color="inherit" href="#contact">Contact</Button>
        </Toolbar>
      </AppBar>
      <Container sx={{ mt: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Welcome to Bowery Creative
        </Typography>
        <Typography variant="body1">
          This React version uses Material-UI for a modern look and feel. Explore our services and discover how we can elevate your brand with AI-driven creative solutions.
        </Typography>
      </Container>
    </>
  );
}
