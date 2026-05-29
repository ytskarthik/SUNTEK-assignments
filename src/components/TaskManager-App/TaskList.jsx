
function TaskLists({tasks}) {

    if(tasks.length===0){
        return <p className="text-3xl text-red-400">Empty</p>
    }
    
  return (
    <div>
        <h3 className='text-4xl text-gray-700 mb-3' >List of Tasks</h3>
        {/*
            tasks.length===0?(<p className="text-3xl text-red-400">Empty</p>):()
        */}

        {tasks.map((taskObj,index)=>(
            <p className='text-2xl' key={index}>
                {taskObj.taskName}
            </p>
        ))}
    </div>
  )
}

export default TaskLists

//if tasks list is empty display msg like empty list else iterate the list 
// condition ? empty : iterate