import React, { useEffect, useState } from "react";

import {
  addTask,
  deleteTask,
  editTask,
  checkedboxMark,
} from "../app/counterSlice";
import { useSelector, useDispatch } from "react-redux";
import TaskPendingImg from "../assets/TaskPendingImg.png";

function PendingTask() {
  const [showPendingTask, setShowPendingTask] = useState([]);
  const tasks = useSelector((state) => state.counter.PendingTasks);
  const checkedvalue = useSelector((state) => state.counter.checkedValue);
  let dispatch = useDispatch();

  useEffect(() => {
    setShowPendingTask([...showPendingTask, tasks]);
  }, []);

  return (
    <>
      <div className="my-4 rounded-xl bg-blue-100 px-6 py-8 max-h-fit min-h-[330px] text-black flex flex-col justify-start items-center  ">
        <div  className="flex flex-row border-l-2 border-r-2 border-b-2 border-zinc-950 mb-5">
          <p className="mb-2 text-3xl text font-medium w-fit px-3   text-black">
            Pending Task </p>
            <img src={TaskPendingImg} className="w-10 h-10 mr-2" />
            </div>
          
        <div className="w-full">
          {tasks.map((task, i) => (
            <>
              <div className="flex sm:flex-row flex-col  items-start sm:items-center justify-between border-zinc-900 hover:rounded-xl hover:border mb-2">
                <h1 key={i} className=" text-2xl w-[80%]  truncate ">
                  <span>{i + 1 + ") "}</span>
                  {task}
                </h1>
                <div className="flex  flex-row  items-center justify-start ">
                  <input
                    type="checkbox"
                    id={i}
                    checked={checkedvalue ? "checked" : ""}
                    onClick={() =>
                      dispatch(
                        checkedboxMark({
                          index: i,
                          name: "pending",
                          pendintask: tasks[i],
                        })
                      )
                    }
                    className=" h-5 w-5 m-2"
                  ></input>
                  <button
                    onClick={() =>
                      dispatch(
                        editTask({ index: i, name: "pending", uTask: tasks[i] })
                      )
                    }
                    className="m-2 h-fit inline-flex items-center justify-center  rounded-xl border border-transparent px-5 py-1 bg-blue-600  font-medium text-white hover:bg-blue-700"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() =>
                      dispatch(deleteTask({ index: i, name: "pending" }))
                    }
                    className="m-2 h-fit inline-flex items-center justify-center rounded-xl border  bg-red-500 px-4 py-1 font-medium text-white shadow "
                  >
                    Delete
                  </button>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default PendingTask;
