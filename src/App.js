import React from 'react';
import Menuindex from './Menubar/Menuindex';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Displayindex from './Displaybar/Displayindex';
import Notifications from './Notification/Notifications';

const App = () => {
  return (
    <>
      <div className='flex bg-[#f0f8ff]'>
        <Router>
          <Menuindex />
          <Routes>
            <Route path='/' element={<Displayindex />} />
            <Route path='/noti' element={<Notifications />} />
          </Routes>
        </Router>
      </div>
    </>
  );
};

export default App;
