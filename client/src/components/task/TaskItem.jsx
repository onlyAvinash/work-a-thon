import React, { useState } from 'react'
import './TaskItem.css'
import { useParams } from 'react-router-dom'
import clsx from 'clsx'
import {User} from "../../dummytask"

const TaskItem = () => {
  const { id } = useParams();
  const [taskArray, setTasksArray] = useState([...User]);
  const currentTask = taskArray.find((task) => {
    return task.id === Number(id)
  })

  return (
    <>
      <div className='bg-white'>
      <header>
      <nav className="main-nav">
        <a  className="logo">
          officeLaunge
        </a>
      </nav>
    </header>
        <h3 className='bg-lightBrown mx-5 px-5 text-2xl py-1 mt-2'>{}</h3>
        <div className='mx-5'>
          <div className='taskDetails px-5 pb-3'>
            <div className="flex items-center ">
              <div>
                <p className='text-xl py-2 font-bold '>{currentTask.description}</p>
                <p className={
                  clsx({ "bg-green": currentTask.isCompleted },
                    { "bg-red": !currentTask.isCompleted },
                    "py-1 font-bold text-white px-2 rounded-md"
                  )
                }>{currentTask.isCompleted ? <>
                  Congrats The task is completed
                </> : <>
                  The Task isn't completed
                </>}</p>

              </div>
              <div className='buttons'>
                <button className='p-5 mr-2 bg-blue pointer btn'>Check In</button>
                <button className='p-5 bg-blue pointer btn'>Check Out</button>
              </div>
            </div>

          </div>

        </div>
      </div>
    </>

  )
}

export default TaskItem