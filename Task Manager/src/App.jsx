import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Footer from './Component/Footer/Footer';
import Navbar from './Component/Navbar/Navbar';
import Addtask from './Component/Addtask/Addtask';
import Navcalender from './Component/NavCalender/Navcalender';
import Progress from './Component/Progress/Progress';
import Status from './Component/Status/Status'; 
import Title from './Component/Title/Title';
import Calender from './Component/Calender/Calender';
import Task from './Component/Task/Task';
import Work from './Component/Work/Work';
import { useState } from 'react';

function HomePage() {
  return (
    <>
      <Navbar />
      <Title />
      <Progress />
      <Footer />
    </>
  );
}

function CalPage() {
  return (
    <>
      <Navcalender />
      <Addtask />
      <Calender />
      <Footer />
    </>
  );
}

function App() {
  const works = Array.from({ length: 1 }, (_, i) => <Work key={i} />);

  const [projects, setProjects] = useState([
    // Your projects and tasks state
  ]);

  const addTask = (projectId, task) => {
    // Add task logic
  }

  const updateTask = (projectId, taskId, updatedTask) => {
    // Update task logic
  }

  const deleteTask = (projectId, taskId) => {
    // Delete task logic
  }

  const addProject = (newProject) => {
    // Add project logic
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/calpage" element={<CalPage />} />
      </Routes>
    </Router>
  );
}

export default App;
