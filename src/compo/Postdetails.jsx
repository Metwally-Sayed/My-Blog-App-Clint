import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Container, ListGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import CreateComment from './CreateComment';

const Postdetails = () => {
  const { id } = useParams();
  const data = useSelector((state) => state);
  const [post, setPost] = useState({});
  useEffect(() => {
    const foundPost = data.find((post) => post.id === +id);
    console.log(data);
    setPost(foundPost);
  }, [data]);


  return (
    <Container>
      <Card style={{ margin: 'auto', width: '90%' }}>
        <Card.Body>
          <Card.Title>
            <h1>Post Details</h1>
          </Card.Title>
          <br />
          <Card.Subtitle className="mb-2 text-muted">
            <h4>{post?.title}</h4>
          </Card.Subtitle>
          <br />
          <Card.Text>
            <p>{post?.body}</p>
          </Card.Text>
          <br />
          <Card style={{ margin: 'auto', width: '100%' }}>
            <ListGroup variant="flush">
              <div>
                <CreateComment post={post} />
                {post?.comment?.length > 0 &&
                  post.comment.map((com) => (
                    <ListGroup.Item key={Math.floor(Math.random() * 1000)}>
                      {com.body}
                    </ListGroup.Item>
                  ))}
                {post ? <></> : <h2>Loading...</h2>}
              </div>
            </ListGroup>
          </Card>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Postdetails;
