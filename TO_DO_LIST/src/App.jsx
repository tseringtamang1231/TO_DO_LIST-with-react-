// import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
    <section className="bg-pink-500 flex h-screen">
    <div className="  h-auto w-[40%] bg-white m-auto mt-18 rounded-xl p-6">
            <h1 className="text-2xl font-semibold ">TO do list </h1>
            <form className="flex justify-center items-center ">
                <input type="text " placeholder="Enter your task" className="bg-gray-200 order-gray-300 rounded-full p-2 px-4 w-full"/>
                <button className="bg-orange-600 p-2  px-4 text-white font-semibold rounded-full m-2">ADD</button>
            </form>
            <div>
                
                    {/* <li className="flex justify-between items-center bg-gray-100 p-2 rounded mb-2">
                        <span>Task 1</span>
                        <button className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
                    </li> */}
                    {/* <!-- More tasks can be added here --> */}
            </div>
    </div>
    </section>
    </>
  )
}

export default App
