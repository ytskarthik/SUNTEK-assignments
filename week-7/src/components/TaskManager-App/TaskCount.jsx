function TaskCount({tasks}) {
    console.log(tasks)
  return (
    <div>
        <h3 className="text-4xl text-gray-700">Tasks Count</h3>
        <p className="text-3xl">{tasks.length}</p>
    </div>
  )
}

export default TaskCount