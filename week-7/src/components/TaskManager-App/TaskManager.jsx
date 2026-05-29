import { useState } from "react"
import AddTask from "./AddTaskForm.jsx"
import TaskCount from "./TaskCount.jsx"
import TaskLists from "./TaskList.jsx"


function TaskManager() {
    let [tasks,setTasks]=useState([])

    //add new task
    const addNewTask=(taskObj)=>{
        setTasks([...tasks,taskObj])
    }
  return (
    <div>
        <h1 className="text-7xl text-black mb-10 bg-gray-400 border-2">Task Manager</h1>
        <div className="flex justify-around bg-gray-400">
        <AddTask addNewTask={addNewTask}/>
        <TaskLists tasks={tasks} />
        <TaskCount tasks={tasks} />
        </div>
    </div>
  );
}

export default TaskManager