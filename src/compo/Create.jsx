import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Axios from 'axios';
import { Container } from 'react-bootstrap';

function Create() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const bodyHandler = (e) => {
    setBody(e.target.value);
  };

  const titleHandler = (e) => {
    setTitle(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const post = {
      title,
      body,
      userId: 1,
    };

    Axios.post('http://localhost:8080/posts', post);
    setTitle('');
    setBody('');
  };
  return (
    <Container>
      <Form
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label> Blog Title </Form.Label>
          <Form.Control
            type="text"
            value={title}
            onChange={(e) => {
              titleHandler(e);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Blog Body</Form.Label>
          <Form.Control
            value={body}
            as="textarea"
            rows={3}
            onChange={(e) => {
              bodyHandler(e);
            }}
          />
        </Form.Group>
        <Button variant="secondary" size="lg " type="submit">
          Submite
        </Button>
      </Form>
    </Container>
  );
}

export default Create;
