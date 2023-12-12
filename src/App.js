import React, { useEffect } from 'react';
import './App.css';
// import Navbar from './components/navbar';
import { data } from './apikey/dummy-data';
import Table from './components/table';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Fixture from './components/fixture';
import Navbar from './components/navbar';

function App() {
  useEffect(() => {
    const btn = document.getElementById('btn');
    const themeElements = document.querySelectorAll('.theme'); 
    
    const handleClick = () => {
      toggleClasses(themeElements);
    };

    const toggleClasses = (elements) => {
      elements.forEach((element) => {
        element.classList.toggle('bg-gray-600');
        element.classList.toggle('text-white');
      });
    };
    
    if (btn) {
      btn.addEventListener('click', handleClick);
    }

    return () => {
      if (btn) {
        btn.removeEventListener('click', handleClick);
      }
    };
  }, []);







  console.log(data);

  return (
    <div className='container w-full md:w-[750px] lr:w-[800px] m-auto'>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Table data={data} />} />
          <Route  path="/fixture/:matchID" element={<Fixture data={data} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

