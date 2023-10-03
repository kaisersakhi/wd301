import React from "react";
import { TaskItem } from "../types.ts";
import { useParams } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage.ts";

interface TaskDetailPageParams extends Record<string, string> {
  id: string;
}

interface TaskAppState {
  tasks: TaskItem[];
}

const TaskDetailPage: React.FC = () => {
  const { id } = useParams<TaskDetailPageParams>();
  const [taskAppState] = useLocalStorage<TaskAppState>("tasks", {
    tasks: [],
  });

  const task = taskAppState.tasks.find((task) => task.id === id);

  return (
    <div className="bg-white shadow-md rounded-md p-4 m-8">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium">{task?.title}</h3>
      </div>
      <p className="text-gray-600">{task?.description}</p>
      <p className="text-gray-600">{task?.dueDate}</p>
    </div>
  );
};

export default TaskDetailPage;
