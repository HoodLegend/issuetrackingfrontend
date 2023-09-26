import { Form, Button} from 'react-bootstrap';
import '../css/addissueform.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Alert } from 'react-bootstrap';

const AddIssue = () => {
const [name, setName] = useState('');
const [description, setDescription] = useState('');
const [priority, setPriority] = useState('URGENT');
const [department, setDepartment] = useState('');
const [isPending, setIsPending] = useState(false);
const navigate = useNavigate();

function successAlert() {
    return (
      <>
        {[
          'success'
        ].map((variant) => (
          <Alert key={variant} variant={variant}>
            You have Successfully adde an issue!
          </Alert>
        ))}
      </>
    );
  }

const handleSubmit = (event) => {
    event.preventDefault();

    setIsPending(true);

    const issue = {name, description, priority, department};

    fetch('http://localhost:8000/upload-faults' , {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(issue)
    }).then(() => {
        setIsPending(false);
        successAlert();
        navigate("/");
    })
}

    return (
      <div className='upload-form'>
        <h4
          style={{
            margin: "45px",
            textAlign: "center",
          }}
        >
          Upload Issue
        </h4>
        <div className="container-fluid d-flex justify-content-center min-vh-70 align-items-center">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="Issue">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" 
              placeholder="Enter Issue" 
              required 
              value={name}
              onChange={(e) => setName(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" 
              placeholder="Enter Description" 
              required 
              value={description}
              onChange={(e) => setDescription(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Select Priority..</Form.Label>
              <Form.Select value={priority}
              onChange={(e) => setPriority(e.target.value)}>
                <option value={"URGENT"}>URGENT</option>
                <option value={"LESS-URGENT"}>LESS-URGENT</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="department">
              <Form.Label>Department</Form.Label>
              <Form.Control type="text" 
              placeholder="Enter Department" 
              required 
              value={department}
              onChange={(e) => setDepartment(e.target.value)}/>
            </Form.Group>

            { !isPending && <Button variant="success" type="submit">
              Upload
            </Button>}

        
            { isPending && <Button variant="success" type="submit" disabled>
              Upload
            </Button>}

          </Form>
        </div>
      </div>
    );
}
 
export default AddIssue;