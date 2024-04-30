import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    PendingTasks:[],
    DoneTasks:[],
    EditMode:false,
    UpdateTask:"",
    editIndex:"",
    checkedValue:false,
    edittoupdatename:"",

}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addTask : (state,action) => {
     state.PendingTasks= [...state.PendingTasks, action.payload]
  },
  deleteTask: (state,action) => {
    if(action.payload.name == "pending"){
  state.PendingTasks= [...state.PendingTasks]
  state.PendingTasks.splice(action.payload.index, 1);
    }
    else if(action.payload.name == "done"){
    state.DoneTasks= [...state.DoneTasks]
    state.DoneTasks.splice(action.payload.index, 1);
    console.log("HI");
    }
  },
  editTask: (state,action) => {
    state.EditMode=true;
    state.UpdateTask=action.payload.uTask;
    state.editIndex=action.payload.index;
    state.edittoupdatename=action.payload.name;
  },
  updateTask: (state,action) => {
    if(state.edittoupdatename == "pending"){
    state.PendingTasks.splice(state.editIndex, 1,action.payload.utask);
    state.EditMode=false;
    }
    else if(state.edittoupdatename == "done"){
      state.DoneTasks.splice(state.editIndex, 1,action.payload.utask);
    state.EditMode=false;
    }
  },
  checkedboxMark:(state,action)=>{
    if(action.payload.name == "pending"){
      state.checkedValue=true;
      state.DoneTasks=[...state.DoneTasks];
      state.DoneTasks.push(action.payload.pendintask);
      state.PendingTasks.splice(action.payload.index, 1);
      console.log("hello");
      state.checkedValue=false;
    }
    else if(action.payload.name == "done"){
      state.PendingTasks=[...state.PendingTasks];
      state.PendingTasks.push(action.payload.pendintask);
      state.DoneTasks.splice(action.payload.index, 1);

    }
    
    
  }

   
  },
})


export const { addTask, deleteTask ,editTask,updateTask,checkedboxMark} = counterSlice.actions

export default counterSlice.reducer