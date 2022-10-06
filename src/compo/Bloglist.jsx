import { Link } from 'react-router-dom';
import { Card, Container } from 'react-bootstrap';
import { BiComment, BiUpvote, BiDownvote } from 'react-icons/bi';
import axios from 'axios';

const Bloglist = ({ post }) => {
  console.log(post);

  const voteUp = async () => {
    try {
      const value = {
        userId: 2,
        value: 1,
      };
      await axios.post(`http://localhost:8080/vote/${post.id}`, value);
    } catch (error) {
      console.log(error);
    }
  };

  const voteDown = async () => {
    try {
      const value = {
        userId: 1,
        value: -1,
      };
      await axios.post(`http://localhost:8080/vote/${post.id}`, value);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Card className="m-4" style={{ margin: 'auto', with: '70%' }}>
        <Card.Body className="m-1">
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>{post.body}</Card.Text>
          <Link
            style={{ textDecoration: 'none' }}
            to={`postdetails/${post.id}`}
          >
            More ...
          </Link>
          <br />
          <br />
          <div>
            <span className="m-2">
              <BiUpvote
                style={{ cursor: 'pointer' }}
                onClick={() => voteUp()}
              />
              <span>{post.totalVoteUp}</span>
            </span>
            <span className="m-2">
              <BiDownvote
                style={{ cursor: 'pointer' }}
                onClick={() => voteDown()}
              />
              <span>{post.totalVoteDown}</span>
            </span>
            <span className="m-2">
              <BiComment /> {post.comment.length}
            </span>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Bloglist;
