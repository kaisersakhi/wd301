import React from "react";
import {TaskItem} from "./types";

interface TaskFormProps {
    addTask: (task: TaskItem) => void;
}

interface TaskFormState {
    title: string;
    description: string;
    dueDate: string;
}

class TaskForm extends React.Component<TaskFormProps, TaskFormState> {
    constructor(props: TaskFormProps) {
        super(props);
        this.state = {
            title: "", description: "", dueDate: ""
        }
    }

    addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        const newTask = {
            title: this.state.title, description: this.state.description, dueDate: this.state.dueDate
        };
        if (this.state.title.length > 0 && this.state.dueDate.length > 0) {
            this.props.addTask(newTask)
            this.setState({title: "", description: "", dueDate: ""})
        }
    };

    titleChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        console.log(`Title changed: ${event.target.value}`)
        this.setState({...this.state, title: event.target.value})
    };

    descriptionChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        this.setState({...this.state, description: event.target.value})
    }

    dueDateChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        this.setState({...this.state, dueDate: event.target.value});
    }

    render(): React.ReactNode {
        return (<form onSubmit={this.addTask} className="gap-1">
            <input
                type="text"
                id="todoTitle"
                value={this.state.title}
                onChange={this.titleChanged} placeholder="Task Name"
                className="border w-full my1"
            />
            <input
                type="text" id="todoDescription"
                value={this.state.description}
                onChange={this.descriptionChanged}
                placeholder="Task Description"
                className="border w-full my1"
            />
            <input
                type="text"
                id="todoDueDate"
                value={this.state.dueDate} onChange={this.dueDateChanged}
                placeholder="Due Date"
                className="border w-full my1"
            />
            <button
                type="submit"
                id="addTaskButton"
                className="w-full mt-3 bg-gray-300 rounded-md">
                Add item
            </button>
        </form>)
    }
}

export default TaskForm;
