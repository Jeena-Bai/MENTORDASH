
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSubmissions } from '../context/SubmissionsContext';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Menu, MenuItem, Typography, IconButton } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList'
import axios from 'axios'
const Submissions = () => {
  const [sub,setSub]=useState([]);
      useEffect(()=>{
          axios.get('http://localhost:3000/api/getSub')
          .then((res) => {
          console.log(res)
          setSub(...sub,res.data)
          })
  },[])
  const { submissions } = useSubmissions();
  const [anchorEl, setAnchorEl] = useState(null);
  const [filter, setFilter] = useState('');
  const navigate = useNavigate();

  const handleFilterClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleFilterClose = (filterType) => {
    setAnchorEl(null);
    setFilter(filterType);
  };

 
  const handleEvaluateClick = (id) => {
    navigate(`/evaluation/${id}`);
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <Typography variant="h4">Submissions</Typography>
        <div>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<FilterListIcon />}
            onClick={handleFilterClick}
          >
            Filter
          </Button>
          <Menu
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={() => handleFilterClose('All')}
          >
           
            <MenuItem onClick={() => handleFilterClose('Batch 1')}>Batch 1</MenuItem>
            <MenuItem onClick={() => handleFilterClose('Batch 2')}>Batch 2</MenuItem>
            <MenuItem onClick={() => handleFilterClose('Topic A')}>Topic A</MenuItem>
            <MenuItem onClick={() => handleFilterClose('Topic B')}>Topic B</MenuItem>
          </Menu>
        </div>
      </div>
      <TableContainer component={Paper}>
        <Table aria-label="submissions table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Student Name</TableCell>
              <TableCell>Submission Date</TableCell>
              <TableCell>Evaluation Status</TableCell>
              <TableCell>Marks</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sub.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.student_name}</TableCell>
                <TableCell>{item.submissionDate}</TableCell>
                <TableCell>{item.evaluationStatus}</TableCell>
                <TableCell>{item.marks}</TableCell>
                <TableCell>
                  {item.evaluationStatus === 'Pending' && (
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleEvaluateClick(item.id)}
                    >
                      Evaluate
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Submissions;
