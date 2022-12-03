import React from 'react'
import NewTaskForm from './NewTaskForm'
import Task from './Task';
import '../styles/TaskList.css'
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function TaskList() {
  const [tasks, setTasks] = React.useState([
    {
      text: "This is a sample task",
      isDone: false
    }
  ]);

  const addTask = text => {
    const newTasks = [...tasks, { text }];
    setTasks(newTasks);
  };

  const markTask = index => {
    const newTasks = [...tasks];
    newTasks[index].isDone = true;
    setTasks(newTasks);
  };

  const removeTask = index => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const editTask = (text, index) => {
    const newTasks = [...tasks];
    newTasks[index].text = text;
    setTasks(newTasks);
  };

  return (
    <div className="app">
      <div className="container">
        <NewTaskForm addTask={addTask} />
        <div className="d-grid gap-3">
          {tasks.map((task, index)=>(
            <Card>
              <Card.Body>
                <Task 
                key={index}
                task={task}
                index={index}
                markTask={markTask}
                removeTask={removeTask}
                editTask={editTask}
                />
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TaskList