import React, { useState } from 'react';
import { TextField, Button, Paper, Typography, List, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const References = () => {
  const [materials, setMaterials] = useState([
    'Material 1',
    'Material 2',
    'Material 3'
  ]);
  const [newMaterial, setNewMaterial] = useState('');

  const handleAddMaterial = (event) => {
    event.preventDefault();
    if (newMaterial.trim()) {
      setMaterials([...materials, newMaterial.trim()]);
      setNewMaterial('');
    }
  };

  const handleDeleteMaterial = (materialToDelete) => {
    setMaterials(materials.filter(material => material !== materialToDelete));
  };

  return (
    <Paper className="container p-3">
      <Typography variant="h5">Manage Reference Materials</Typography>
      <form onSubmit={handleAddMaterial} className="mb-3">
        <div className="mb-3">
          <TextField
            label="Add Reference Material"
            variant="outlined"
            fullWidth
            value={newMaterial}
            onChange={(e) => setNewMaterial(e.target.value)}
          />
        </div>
        <Button variant="contained" color="primary" type="submit">
          Add Material
        </Button>
      </form>
      <List>
        {materials.map((material, index) => (
          <ListItem key={index} secondaryAction={
            <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteMaterial(material)}>
              <DeleteIcon />
            </IconButton>
          }>
            <ListItemText primary={material} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default References;

