// import { useEffect } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import { TaskItem } from "./types";
import { useLocalStorage } from "./hooks/useLocalStorage.ts";

interface TaskAppState {
  tasks: TaskItem[];
}

const TaskApp = () => {
  const initialState: TaskAppState = {
    tasks: [],
  };
  const [taskAppState, setTaskAppState] = useLocalStorage<TaskAppState>(
    "tasks",
    initialState,
  );

  const addTask = (task: TaskItem) => {
    task.id = Math.random().toString(36).substring(2, 9);
    setTaskAppState({
      tasks: [...taskAppState.tasks, task],
    });
  };

  const taskRemoveHandler = (title: string) => {
    let newTasks = taskAppState.tasks.filter((task) => task.title != title);

    setTaskAppState({
      tasks: newTasks,
    });
  };

  return (
    <div className="container py-10 max-w-4xl mx-auto">
      <h1 className="text-3xl mb-2 font-bold text-slate-700">Smarter Tasks</h1>
      <h1 className="text-lg mb-6 text-slate-600">
        <span className="font-bold">Project: </span>
        Graduation Final Year Project (Revamp college website)
      </h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="border border-slate-200 rounded-xl p-4">
          <h1 className="text-slate-500 text-xl font-bold text-center mb-2">
            Pending
          </h1>
          <TaskForm addTask={addTask} />
          <TaskList tasks={taskAppState.tasks} onRemove={taskRemoveHandler} />
        </div>
      </div>
    </div>
  );
};

export default TaskApp;
