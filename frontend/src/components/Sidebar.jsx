import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Dashboard, Assignment, Assessment, Book } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Sidebar = () => (
  <div className="sidebar bg-dark">
    <List component="nav">
      <ListItem button component={Link} to="/">
        <ListItemIcon><Dashboard style={{ color: 'white' }} /></ListItemIcon>
        <ListItemText primary="Projects" />
      </ListItem>
       <ListItem button component={Link} to="/submissions">
        <ListItemIcon><Assignment style={{ color: 'white' }} /></ListItemIcon>
        <ListItemText primary="Submission" />
      </ListItem>
      <ListItem button component={Link} to="/evaluation">
        <ListItemIcon><Assessment style={{ color: 'white' }} /></ListItemIcon>
        <ListItemText primary="Evaluation" />
      </ListItem> 
      <ListItem button component={Link} to="/references">
        <ListItemIcon><Book style={{ color: 'white' }} /></ListItemIcon>
        <ListItemText primary="Reference Material" />
      </ListItem>
    </List>
  </div>
);

export default Sidebar;
