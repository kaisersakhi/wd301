import Task from "./Task";
import { TaskItem } from "./types";

interface Props {
  tasks: TaskItem[];
  onRemove: (title: string) => void;
}

const TaskList = (props: Props) => {
  const list = props.tasks.map((task, idx) => (
    <li>
      <Task
        key={idx}
        title={task.title}
        description={task.description}
        dueDate={task.dueDate}
        onDelete={props.onRemove}
      />
    </li>
  ));

  return <ul>{list}</ul>;
};

export default TaskList;
