import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TextField, Button, Paper, Typography } from '@mui/material';

const Evaluation = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [marks, setMarks] = useState('');
  const [comments, setComments] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    alert(`Marks: ${marks}, Comments: ${comments}`);
    navigate('/submissions');
  };

  const handleDelete = () => {
    // Handle delete submission logic here
    alert(`Submission ${id} deleted`);
    navigate('/submissions');
  };

  return (
    <Paper className="container p-3">
      <Typography variant="h5">Evaluate Submission {id}</Typography>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <TextField
            label="Enter the Marks"
            variant="outlined"
            fullWidth
            value={marks}
            onChange={(e) => setMarks(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <TextField
            label="Enter the Comments"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            value={comments}
            onChange={(e) => setComments(e.target.value)}
          />
        </div>
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          onClick={handleDelete}
          style={{ marginLeft: '10px' }}
        >
          Delete Submission
        </Button>
      </form>
    </Paper>
  );
};

export default Evaluation;

