import './App.css';
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./../node_modules/bootstrap/dist/js/bootstrap.min.js"
import { Route, Routes } from "react-router-dom";
import Header from './Component/Header';
import Home from './Component/Home.jsx';
import About from './Component/About.jsx';
import Courses from './Component/Courses.jsx';
import SuccessStory from './Component/SuccessStory.jsx';
import RegistrationForm from './Component/RegistrationForm.jsx';

function App() {
  return (
    <div>
<Header />

<Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Courses" element={<Courses />} />
        <Route path="/success" element={<SuccessStory />} />
        <Route path="/registration" element={<RegistrationForm />} />
      </Routes>
    </div>
  );
}

export default App;
