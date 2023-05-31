import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/textForm';
// import { Routes, Route } from 'react-router-dom';
// import About from './components/About';


function App() {
  return (
  //   <div className="App">
  //   <Routes>
  //     <Route path="/" element={<TextForm />} />
  //     <Route path="about" element={<About />} />
  //   </Routes>
  // </div>
  <>
  <Navbar title="TextUtils" />
  <div className='container my-3'>
    <TextForm heading = "Enter the text to analyze below"/>
  </div>
  </>
  );
}

export default App;
  