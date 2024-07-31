import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import CarouselComponent from './Component/Carousel/CarouselComponent';
import { useState } from 'react';

function HomePage({ projects }) {
  return (
    <>
      <Navbar />
      <Title />
      <Status />
      <CarouselComponent projects={projects} />
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
  const [projects, setProjects] = useState([
    {
      name: 'Backend-project',
      id: 1,
      type: "Completed",
      created: '02-08-2002',
      tasks: [
        {
          id: 1,
          status: "Completed",
          name: 'Design Api',
          created: '2 Days Ago'
        },
        {
          id: 2,
          status: "Postponed",
          name: 'Design Api',
          created: '3 Days Ago'
        }
      ]
    },
    {
      name: 'Frontend-project',
      type: "Completed",
      id: 2,
      created: '06-08-2002',
      tasks: [
        {
          id: 1,
          status: "Completed",
          name: 'Design Api',
          created: '3 Days Ago'
        },
        {
          id: 2,
          status: "Postponed",
          name: 'Design Api',
          created: '3 Days Ago'
        }
      ]
    },
  ]);

  const addTask = (projectId, task) => {
    setProjects(prevProjects => prevProjects.map(project => 
      project.id === projectId ? {
        ...project,
        tasks: [...project.tasks, { ...task, id: project.tasks.length + 1 }]
      } : project
    ));
  }

  const updateTask = (projectId, taskId, updatedTask) => {
    setProjects(prevProjects => prevProjects.map(project => 
      project.id === projectId ? {
        ...project,
        tasks: project.tasks.map(task => task.id === taskId ? updatedTask : task)
      } : project
    ));
  }

  const deleteTask = (projectId, taskId) => {
    setProjects(prevProjects => prevProjects.map(project => 
      project.id === projectId ? {
        ...project,
        tasks: project.tasks.filter(task => task.id !== taskId)
      } : project
    ));
  }

  const addProject = (newProject) => {
    setProjects(prevProjects => [
      ...prevProjects,
      { ...newProject, id: prevProjects.length + 1, tasks: [] }
    ]);
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage projects={projects} />} />
        <Route path="/calpage" element={<CalPage />} />
      </Routes>
    </Router>
  );
}

export default App;
