import { useForm } from 'react-hook-form'

function AddTask({addNewTask}) {
    const {register,handleSubmit}=useForm()
    const onFormSubmit=(taskObj)=>{
        console.log(taskObj);
        addNewTask(taskObj);
    };
  return (
    <div>
        <h3 className='text-4xl text-gray-700 mb-5'>Add Task</h3>
        <form onSubmit={handleSubmit(onFormSubmit)}>
            <div className='mb-3'>
            <input type="text" {...register("taskName",{required:true})} placeholder='Enter task name' className="border px-2 py-2 " />
            </div>
            <div>
                <button type='submit' className='bg-gray-700 text-lime-100 px-3 py-2 mb-2' >Add new task</button>
            </div>
        </form>

    </div>
  )
}

export default AddTask