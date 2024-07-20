import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ProjectCard = ({ title, description,mentor_name,number}) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
   if(number==1)
    navigate('/submissions')
  };

  return (
    <Card className="mb-3" style={{ backgroundColor: 'black', color: 'white', cursor: 'pointer',marginTop:'2px',marginLeft:'20px',marginRight:'20px' }} onClick={handleCardClick}>
      <CardContent style={{textAlign:'center'}}>
      
        <Typography variant="h4">{number}.      {title} </Typography>
      
        <Typography variant="body2">---{description}</Typography>
        <Typography variant="h6">Mentor Name:{mentor_name}</Typography>
        
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
