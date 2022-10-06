import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import logo from '../imgs/reddit-logo.png';
import { Link } from 'react-router-dom';

function TextLinkExample() {
  return (
    <Navbar style={{ backgroundColor: '#FFFFFF', height: '48px' }}>
      <Container>
        <Navbar.Brand
        // id="logo"
        >
          <Link to={'/'}>{<Image width="100px" src={logo} />}</Link>
        </Navbar.Brand>
        <Navbar.Toggle />
        {/* <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
        </Form> */}
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className="fw-bold">
            <Link className="m-3" style={{ textDecoration: 'none' }} to={'/'}>
              Home
            </Link>
            <Link
              className="m-3"
              style={{ textDecoration: 'none' }}
              to={'/profile'}
            >
              Profile
            </Link>
            <Link
              className="m-3"
              style={{ textDecoration: 'none' }}
              to={'/create'}
            >
              Create New Blog
            </Link>
          </Navbar.Text>
        </Navbar.Collapse>
        <Image
          roundedCircle
          width="35px"
          src="https://randomuser.me/api/portraits/men/32.jpg"
        />
      </Container>
    </Navbar>
  );
}

export default TextLinkExample;
