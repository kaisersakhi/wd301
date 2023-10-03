import Task from "./Task";
import { TaskItem } from "./types";

interface Props {
  tasks: TaskItem[];
  onRemove: (title: string) => void;
}

const TaskList = (props: Props) => {
  const list = props.tasks.map((task, idx) => (
    <li key={idx}>
      <Task key={idx} task={task} onDelete={props.onRemove} />
    </li>
  ));

  return <ul>{list}</ul>;
};

export default TaskList;
