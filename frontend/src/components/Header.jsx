import { AppBar, Toolbar, Typography } from '@mui/material';
import React from 'react';


const Header = () => (
  <AppBar position="static" color="primary">
    <Toolbar>
      <Typography variant="h6">MENTOR DASHBOARD</Typography>
    </Toolbar>
  </AppBar>
);

export default Header;



