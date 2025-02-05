import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthProvider'

const CreateTask = () => {
    const [userData, setUserData] = useContext(AuthContext)

    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [asignTo, setAsignTo] = useState('')
    const [category, setCategory] = useState('')

    const [newTask, setNewTask] = useState({})

    const submitHandler = (e) => {
        e.preventDefault()

        setNewTask({ taskTitle, taskDescription, taskDate, category, active: false, newTask: true, failed: false, completed: false })

        const data = userData

        data.forEach((elem) => {
            if (asignTo === elem.firstName) {
                elem.tasks.push(newTask)
                elem.taskCounts.newTask += 1
            }
        })

        setUserData(data)
        console.log(data)

        setTaskTitle('')
        setCategory('')
        setAsignTo('')
        setTaskDate('')
        setTaskDescription('')
    }

    return (
        <div className="p-5 bg-[#1c1c1c] mt-5 rounded">
            <form 
                onSubmit={submitHandler}
                className="flex flex-col lg:flex-row gap-6 w-full"
            >
                {/* Left Section - Inputs */}
                <div className="w-full lg:w-1/2">
                    <div>
                        <h3 className="text-sm text-gray-300 mb-1">Task Title</h3>
                        <input
                            value={taskTitle}
                            onChange={(e) => setTaskTitle(e.target.value)}
                            className="text-sm py-2 px-3 w-full lg:w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4"
                            type="text"
                            placeholder="Make a UI design"
                        />
                    </div>
                    <div>
                        <h3 className="text-sm text-gray-300 mb-1">Date</h3>
                        <input
                            value={taskDate}
                            onChange={(e) => setTaskDate(e.target.value)}
                            className="text-sm py-2 px-3 w-full lg:w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4"
                            type="date"
                        />
                    </div>
                    <div>
                        <h3 className="text-sm text-gray-300 mb-1">Assign to</h3>
                        <input
                            value={asignTo}
                            onChange={(e) => setAsignTo(e.target.value)}
                            className="text-sm py-2 px-3 w-full lg:w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4"
                            type="text"
                            placeholder="Employee name"
                        />
                    </div>
                    <div>
                        <h3 className="text-sm text-gray-300 mb-1">Category</h3>
                        <input
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="text-sm py-2 px-3 w-full lg:w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4"
                            type="text"
                            placeholder="Design, Dev, etc."
                        />
                    </div>
                </div>

                {/* Right Section - Description & Button */}
                <div className="w-full lg:w-1/2 flex flex-col">
                    <h3 className="text-sm text-gray-300 mb-1">Description</h3>
                    <textarea
                        value={taskDescription}
                        onChange={(e) => setTaskDescription(e.target.value)}
                        className="w-full h-40 text-sm py-2 px-4 rounded outline-none bg-transparent border border-gray-400"
                        placeholder="Enter task description..."
                    ></textarea>
                    <button
                        className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full"
                    >
                        Create Task
                    </button>
                </div>
            </form>
        </div>
    )
}

export default CreateTask
