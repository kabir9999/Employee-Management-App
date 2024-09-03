import './App.css';
import {BrowserRouter , Navigate , Route , Routes} from "react-router-dom";
import EmployeemanagementApp from './Components/EmployeeManagementApp';
import EmployeeDetails from './Components/EmployeeDetails';
function App() {
  return (
    <div >
     <BrowserRouter>
          <Routes>
                <Route path="/" element = {<Navigate to = "employee" />} />
                <Route path="/employee" element = {<EmployeemanagementApp />} />
                <Route path="/employee/:id" element = {<EmployeeDetails />} />
          </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
