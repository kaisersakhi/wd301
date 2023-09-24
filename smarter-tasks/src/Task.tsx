import "./TaskCard.css";

interface TaskProp {
  title: string;
  description: string;
  dueDate: string;
  onDelete: (title: string) => void;
}

const Task = (props: TaskProp) => {
  return (
    <div className="TaskItem shadow-md border border-slate-100 flex w-full">
      <div className="w-full">
        <h2 className="text-base font-bold my-1">{props.title}</h2>
        <p className="text-sm text-slate-500">{props.dueDate}</p>
        <p className="text-sm text-slate-500">
          Description: {props.description}
        </p>
      </div>
      <div className="m-w-1/4">
        <button
          className="deleteTaskButton flex items-center h-full"
          onClick={() => props.onDelete(props.title)}
        >
          <p className="bg-red-500 px-2 p-1 border rounded-md text-white">
            Remove
          </p>
        </button>
      </div>
    </div>
  );
};

export default Task;
