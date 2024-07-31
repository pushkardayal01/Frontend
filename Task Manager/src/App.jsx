import './App.css';
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

function App() {
  const works = Array.from({ length: 1 }, (_, i) => <Work key={i} />);

  return (
    <div className="container">
      <nav>
        <Navcalender/>
      </nav>
      <Addtask/>
      <Calender/>
      <Task/>
      <div className="box">
        {works}
      </div>
      <Footer/>
    </div>
  );
}

export default App;
