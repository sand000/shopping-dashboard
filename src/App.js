import './App.css';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './screens/Dashboard';
import Navbar from './components/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' exact element={<Dashboard/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
