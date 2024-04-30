import React from 'react';
import PendingTask from './PendingTask';
import DoneTask from './DoneTask';
import AddOrUpdate from './AddOrUpdate';



function PendingAndDone() {

  return (
    <>
     <div className=' flex flex-col sm:flex-row  w-full items-start justify-center  '>
      <AddOrUpdate />
      </div>
      <div className=' flex flex-col lg:flex-row  w-full items-start justify-center  '>
        <div className=' w-full lg:w-[50%] px-5'><PendingTask /></div>
        <div className=' w-full lg:w-[50%] px-5'><DoneTask /></div>
      </div>

    </>
  )
}

export default PendingAndDone