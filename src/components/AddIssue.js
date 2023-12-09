import { Form} from 'react-bootstrap';
import '../css/addissueform.css';
import { useState } from 'react';

const AddIssue = () => {
const [name, setName] = useState('');
const [description, setDescription] = useState('');
const [priority, setPriority] = useState('URGENT');
const [department, setDepartment] = useState('');
const [isPending, setIsPending] = useState(false);


const handleIssueSubmission = (event) => {
    event.preventDefault();

    setIsPending(true);
    setName("")
    setDepartment("")
    setDescription("")
    setPriority("")

    const issue = {name, description, priority, department};

    fetch('http://localhost:8080/save-fault' , {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(issue)
    }).then(() => {
        setIsPending(false);
    })
}

    return (
      <div className="upload-form">
        <h4
          style={{
            margin: "45px",
            textAlign: "center",
          }}
        >
          Upload Issue
        </h4>
        <div className="container-fluid d-flex justify-content-center min-vh-70 align-items-center">
          <Form onSubmit={handleIssueSubmission}>
            <Form.Group className="mb-3" controlId="Issue">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Issue"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Description"
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Select Priority..</Form.Label>
              <Form.Select
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
              >
                <option value={"URGENT"}>URGENT</option>
                <option value={"LESS-URGENT"}>LESS-URGENT</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="department">
              <Form.Label>Department</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Department"
                required
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
              />
            </Form.Group>

            {/* <div className="col-12">
              <button
                className="btn btn-success btn-block"
                disabled={isPending}
              >
                {isPending && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                <span>Upload</span>
              </button>
            </div> */}

            {!isPending && (
              <button className="btn btn-success" type="submit">
                Upload
              </button>
            )}

            {isPending && (
              <button className='btn btn-success' type="submit" disabled>
                <span className="spinner-border spinner-border-sm"></span>
                Upload
              </button>
            )}
          </Form>
        </div>
      </div>
    );
}
 
export default AddIssue;