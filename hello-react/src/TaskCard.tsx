import './TaskCard.css'
import React from "react";

interface TaskCardProps {
    title?: string,
    dueDate?: string,
    completedAtDate?: string,
    assigneeName?: string;
}
const TaskCard: React.FC<TaskCardProps> = (props) => {
    let dateString = props.completedAtDate
        ? `Completed on: ${props.completedAtDate}`
        : `Due on: ${props.dueDate}`

    return (
        <div className='font-inter border border-gray-500 p-2 my-2'>
            <h2 className="text-l font-semibold">{props.title}</h2>
            <p className="text-xs font-inter">{dateString}</p>
            <p className="text-xs font-inter">Assignee: {props.assigneeName}</p>
        </div>
    )
}

export default TaskCard