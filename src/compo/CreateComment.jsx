import { useState } from 'react';
import { Form, Button, InputGroup } from 'react-bootstrap';
import axios from 'axios';

function CreateComment({ post }) {
  const [body, setBody] = useState('');

  const sendComment = async (comment) => {
    try {
      await axios.post(
        `http://localhost:8080/posts/${post.id}/comment/`,
        comment,
      );
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <>
      <span>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            const comment = {
              user: 2,
              body,
            };
            sendComment(comment);
            setBody('');
          }}
        >
          <InputGroup>
            <Form.Control
              onChange={(e) => setBody(e.target.value)}
              placeholder="Enter your comment"
              style={{ height: '40px' }}
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              value={body}
            />
            <Button variant="secondary" type="submit" id="button-addon2">
              Send
            </Button>
          </InputGroup>
        </Form>
      </span>
    </>
  );
}

export default CreateComment;
