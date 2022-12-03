import React from 'react'
import '../styles/Task.css'
import { Modal, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FiEdit2, FiCheck } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";

function Task({task, index, markTask, removeTask, editTask}) {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [value, setValue] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    editTask(value, index);
    setValue("");
  };

  return (
    <div className="task">
      <span  style={{ textDecoration: task.isDone ? "line-through" : "" }}>{task.text}</span>
      <div>
        <Button variant="outline-success" onClick={() => markTask(index)}><FiCheck style={{fontSize: '25px'}}/></Button>{' '}
        <Button variant="outline-secondary" onClick={handleShow}><FiEdit2 style={{fontSize: '25px'}}/></Button>{' '}
        <Button variant="outline-danger" onClick={() => removeTask(index)}><AiOutlineDelete style={{fontSize: '25px'}}/></Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Task</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>

        <Modal.Body>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                defaultValue={task.text}
                onChange={e => setValue(e.target.value)}
                autoFocus
              />
            </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button type="submit" variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
        </Form>

      </Modal>

    </div>
  )
}  

export default Task