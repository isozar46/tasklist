import React from 'react'
import { Button, Form } from 'react-bootstrap';
import '../styles/NewTaskForm.css'

function NewTaskForm({ addTask }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTask(value);
    setValue("");
  };

  return (
    <div>
        <Form onSubmit={handleSubmit} className="newtaskform"> 
          <div className="textinput">
              <Form.Control type="text" value={value} onChange={e => setValue(e.target.value)} className="input" placeholder="Write your task here then click Add" />
          </div>
          <div>
            <Button variant="primary mb-3" type="submit">
            Add
            </Button>
          </div>
        </Form>
    </div>
  )
}

export default NewTaskForm