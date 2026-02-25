import { useState } from 'react'
import './App.css'

function App() {
      //  const  form_btn =  document.getElementById('main_btn');
      //  form_btn.addEventListener("click",(e)=>{
      //   e.preventDefault()
      //       const task_manager = document.getElementById('task_manager').value
      //       console.log(task_manager);
            
      //  })  // we canot used js keyword react is another libary so.....
      const [Task ,setTask] = useState("");
      const [TaskList,setlists] = useState([]);
  return (
    <>
    <section className="bg-pink-500 flex h-screen">
    <div className="  h-auto w-[40%] bg-white m-auto mt-18 rounded-xl p-6">
            <h1 className="text-2xl font-semibold ">TO do list </h1>
            <form className="flex justify-center items-center "
             onSubmit={(e)=>{
              e.preventDefault()
              // console.log(Task);
              if(Task.trim() === "") return;
              setlists([...TaskList,Task]);
              setTask("");
             }}>
            
                <input 
                  type="text " 
                  placeholder="Enter your task"
                  id='task_manager'
                  className="bg-gray-200 order-gray-300 rounded-full p-2 px-4 w-full"
                  // value={setTask}
                   value={Task}
                  onChange={(e)=>setTask(e.target.value)}
                  />
                <button className="bg-orange-600 p-2  px-4 text-white font-semibold rounded-full m-2" 
                // onClick={
                //     (e)=>{
                //       e.preventDefault()

                      
                //     }
                // }
             
                >ADD</button>
            </form>
            <div>
            {
              TaskList.map((task,index )=>{
                    return  (<li key={index} className="flex justify-between items-center bg-gray-100 p-2 rounded mb-2">
                        <span>{task}</span>
                        <div className='flex gap-x-2'>
                        <button className="bg-red-500 text-white px-2 py-1 rounded cursor-pointer">Edit</button>
                        <button className="bg-red-500 text-white px-2 py-1 rounded cursor-pointer">Delete</button>
                        </div>
                    </li> )
              })
            }
                
                    {/* <li className="flex justify-between items-center bg-gray-100 p-2 rounded mb-2">
                        <span>{Task}</span>
                        <div className='flex gap-x-2'>
                        <button className="bg-red-500 text-white px-2 py-1 rounded cursor-pointer">Edit</button>
                        <button className="bg-red-500 text-white px-2 py-1 rounded cursor-pointer">Delete</button>
                        </div>
                    </li> */}
                    {/* <!-- More tasks can be added here --> */}
            </div>
            
    </div>
    </section>
    </>
  )
}

export default App
