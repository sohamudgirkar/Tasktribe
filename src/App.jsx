import React from 'react';
import './App.css';
import Navigationbar from './component/Navigationbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PendingAndDone from './component/PendingAndDone';
import ShowPendingTasks from './component/ShowPendingTasks';
import ShowDoneTasks from './component/ShowDoneTask';
import Calendar from './component/Calendar';

function App() {
  

  return (
    <>
      <BrowserRouter>
      <Navigationbar />
      <Routes>
        <Route path="/" element={<PendingAndDone />}/>
        <Route path="/pendingtask" element={<ShowPendingTasks />}/>
        <Route path="/donetask" element={<ShowDoneTasks />}/>
        <Route path="/calendar" element={<Calendar />}/>
      </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
