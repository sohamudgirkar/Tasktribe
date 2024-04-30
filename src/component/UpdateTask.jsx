import React, { useState ,useEffect} from 'react';
import {useSelector, useDispatch } from 'react-redux'
import  {  updateTask } from '../app/counterSlice'
import handleKeyPress  from './Onenter';

function UpdateTask() {
    const ToBeUpdateTask = useSelector((state) => state.counter.UpdateTask);
  const[updateTaskInput,setUpdateTaskInput]=useState(ToBeUpdateTask);
  let dispatch= useDispatch();

  useEffect(() => {
    const handleKeyPressListener = (event) => handleKeyPress(event, "myBtn");
    document.addEventListener("keypress", handleKeyPressListener);
    return () => {
      document.removeEventListener("keypress", handleKeyPressListener);
    };
  }, []);
  

  const HandleInputUpdateTask=(str)=>{
    setUpdateTaskInput(str);
  }

  const HandleUpdateTask=()=>{
   if (updateTaskInput.trim() !== ''){
    dispatch(updateTask({name:"pending",utask:updateTaskInput}))
    setUpdateTaskInput("");
    console.log("hello");
    }
  }


  return (
    <>
     
      <div className="relative mx-auto flex w-full max-w-2xl items-center justify-between rounded-md border shadow-lg my-9">
        <input type="text"   value={updateTaskInput} onChange={(e)=>HandleInputUpdateTask(e.target.value)} className="h-14 w-full rounded-md pr-24 lg:pr-40  pl-4 outline-none focus:ring-2" placeholder="Enter Updating Task" />
        <button id="myBtn" onClick={HandleUpdateTask} className="absolute right-0 mr-1 inline-flex h-12 items-center justify-center rounded-lg bg-gray-900 px-1 lg:px-10  font-medium text-white  hover:bg-gray-700">Update Task</button>
      </div>
   

    </>
  )
}

export default UpdateTask
