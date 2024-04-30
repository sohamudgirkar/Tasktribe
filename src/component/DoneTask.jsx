import React, { useEffect, useState } from "react";
import { deleteTask, checkedboxMark } from "../app/counterSlice";
import { useSelector, useDispatch } from "react-redux";

function DoneTask() {
  const [showDoneTask, setShowPendingTask] = useState([""]);
  const tasks = useSelector((state) => state.counter.DoneTasks);
  let dispatch = useDispatch();

  useEffect(() => {
    setShowPendingTask([...showDoneTask, tasks]);
  }, []);

  const handlecheckbox = (p) => {
    dispatch(checkedboxMark(p));
  };

  return (
    <>
      <div className="my-4 rounded-xl bg-blue-100 px-6 py-8 max-h-fit min-h-[330px] text-black flex flex-col justify-start items-center  ">
        <h1 className=" text-3xl text font-medium w-fit px-3  border-l-2 border-r-2 border-b-2 border-zinc-950 text-black mb-5">
          Done Task{" "}
          <input
            type="checkbox"
            checked
            className=" accent-green-600 h-7 w-7 m-2"
          ></input>
        </h1>
        <div className="w-full">
          {tasks.map((task, i) => (
            <>
              <div className="flex sm:flex-row flex-col  items-start sm:items-center justify-between border-zinc-900 hover:rounded-xl hover:border mb-2">
                <div key={i} className=" text-2xl w-[80%]  truncate">
                  <span>{i + 1 + ") "}</span>
                  {task}
                </div>
                <div className="flex  flex-row  items-center justify-start ">
                  <input
                    type="checkbox"
                    checked
                    onClick={() =>
                      handlecheckbox({
                        index: i,
                        name: "done",
                        pendintask: tasks[i],
                      })
                    }
                    className="accent-green-600 h-5 w-5 m-2"
                  ></input>
                  {/* <button onClick={()=>dispatch(editTask({index:i,name:"done",utask:tasks[i]}))} className="m-2 h-fit inline-flex items-center justify-center  rounded-xl border border-transparent px-5 py-1 bg-blue-600  font-medium text-white hover:bg-blue-700">
                  Edit
                </button> */}
                  <button
                    onClick={() =>
                      dispatch(deleteTask({ index: i, name: "done" }))
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

export default DoneTask;
