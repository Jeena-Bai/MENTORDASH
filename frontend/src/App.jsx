
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Projects from './components/Projects';
import Submissions from './components/Submissions';
import Evaluation from './components/Evaluation';
import References from './components/References';
import { SubmissionsProvider } from './context/SubmissionsContext';
// import './styles.css'; // Make sure to import your styles

const App = () => (
  <SubmissionsProvider>
    <Router>
      <div className="d-flex">
        <Sidebar />
        <div className="main-content flex-grow-1 animated-background">
          <Header />
          <Routes>
            <Route path="/" element={<Projects />} />
            <Route path="/submissions" element={<Submissions />} />
            <Route path="/evaluation/:id" element={<Evaluation />} />
            <Route path="/evaluation" element={<Evaluation />} />
            <Route path="/references" element={<References />} />
          </Routes>
        </div>
      </div>
    </Router>
  </SubmissionsProvider>
);

export default App;
