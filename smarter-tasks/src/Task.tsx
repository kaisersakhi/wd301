import "./TaskCard.css";

interface TaskProp {
  task: {
    id: string;
    title: string;
    description: string;
    dueDate: string;
  };
  onDelete: (title: string) => void;
}

const Task = (props: TaskProp) => {
  const { task, onDelete } = props;
  console.log(task);
  return (
    <div className="TaskItem shadow-md border border-slate-100 flex w-full">
      <div className="w-full">
        <a href={`/tasks/${task.id || ""}`}>
          <h2 className="text-base font-bold my-1">{task.title}</h2>
        </a>
        <p className="text-sm text-slate-500">{task.dueDate}</p>
        <p className="text-sm text-slate-500">
          Description: {task.description}
        </p>
      </div>
      <div className="m-w-1/4">
        <button
          className="deleteTaskButton flex items-center h-full"
          onClick={() => onDelete(task.title)}
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
