import React from 'react';
import ProjectCard from './ProjectCard';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios'

const Projects = () => {
const [projects,setProject]=useState([]);
      useEffect(()=>{
          axios.get('http://localhost:3000/api/get').then((res)=>{
          //console.log(res)
          setProject(...projects,res.data)
          })
  },[])
return(
   <div className="container">
    <div className="row">
      {projects.map((item, index) => (
        <div className="col-md-6" key={index}>
          <ProjectCard 
        
          title={item.project_name} 
          number={item.project_number}
          description={item.description} 
          mentor_name={item.mentor_name}/>
        </div>
      ))}
    </div>
  </div>
    );
};

export default Projects;
