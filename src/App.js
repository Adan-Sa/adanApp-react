
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Welcome from "./Pages/Welcome";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>

        <Route path='/' element={<Welcome />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />

      </Routes>
    </Router>


  );
}

export default App;
