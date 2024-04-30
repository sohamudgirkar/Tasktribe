import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import  { addTask } from '../app/counterSlice'
import handleKeyPress  from './Onenter';
function AddTask() {
  const[taskInput,setTaskInput]=useState("");
  let dispatch= useDispatch();

  useEffect(() => {
    const handleKeyPressListener = (event) => handleKeyPress(event, "myBtn");
    document.addEventListener("keypress", handleKeyPressListener);
    return () => {
      document.removeEventListener("keypress", handleKeyPressListener);
    };
  }, []);
  const HandleInputTask=(str)=>{
    setTaskInput(str);
  }

  const HandleAddCart=()=>{
   if (taskInput.trim() !== ''){
    dispatch(addTask(taskInput))
    setTaskInput("");
    }
  }


  return (
    <>
     
      <div className="relative mx-auto flex w-full max-w-2xl items-center justify-between rounded-md border shadow-lg my-9">
        <input type="text" name="search"  value={taskInput} onChange={(e)=>HandleInputTask(e.target.value)} className="h-14 w-full rounded-md pr-20  pl-4 lg:pr-40  outline-none focus:ring-2" placeholder="Enter Task" />
        <button id='myBtn' onClick={HandleAddCart} className="absolute right-0 mr-1 inline-flex h-12 items-center justify-center rounded-lg bg-gray-900 px-1 lg:px-10  font-medium text-white  hover:bg-gray-700">Add Task</button>
      </div>
   

    </>
  )
}

export default AddTask
