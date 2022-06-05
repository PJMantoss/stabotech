import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import UserAccount from './pages/UserAccount';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element = {<Login />}/>
        <Route path="/register" element={<Register />} />
        <Route path="/useraccount" element={<UserAccount />} />
      </Routes>
    </Router>
  );
}

export default App;
