import './TaskCard.css'
const TaskCard = (props) => {
    let dateString = props.completedAtDate
        ? `Completed on: ${props.completedAtDate}`
        : `Due on: ${props.dueDate}`

    return (
        <div className='font-inter border border-gray-500 p-2 my-2'>
            <h2 className="text-l font-semibold">{props.title}</h2>
            <p className="text-xs font-inter">{dateString}</p>
            <p className="text-xs font-inter">Assignee: {props.assignee}</p>
        </div>
    )
}

export default TaskCard