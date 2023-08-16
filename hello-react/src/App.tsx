import TaskCard from "./TaskCard";

function App() {
    return (
        <>
            <div className="m-auto max-w-2xl py-8">
                <h1 className="text-3xl font-semibold ">Smarter Tasks</h1>
                <p>Project: Graduation Final Project (Revamp College Website)</p>
                <div className="flex py-8 gap-4">
                    <div className="py-2 px-4 border border-gray-400 rounded-lg w-1/2">
                        <h2 className="text-center font-inter text-lg font-semibold">Pending</h2>
                        <TaskCard title="Write blog" assignee="Kaiser Sakhi" dueDate="20-2-2003"/>
                        <TaskCard title="Write blog" assignee="Kaiser Sakhi" dueDate="02-02-2022"/>
                        <button className="bg-gray-200 w-full text-gray-600 text-start px-2 font-inter">+ New Task</button>
                    </div>
                    <div className="py-2 px-4 border border-gray-400 rounded-lg  w-1/2">
                        <h2 className="text-center font-inter text-lg font-semibold">Done</h2>
                        <TaskCard title="Write blog" assignee="Kaiser Sakhi" completedAtDate="02-02-2022"/>
                        <TaskCard title="Write blog" assignee="Kaiser Sakhi" completedAtDate="02-02-2022"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
