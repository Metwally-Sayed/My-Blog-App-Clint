// import Bloglist from './Bloglist';
import Bloglist from './Bloglist';
// import { Nav } from 'react-bootstrap';
// import Card from 'react-bootstrap/Card';
import {  useSelector } from 'react-redux';

function Home() {
  const posts = useSelector((state) => state);
 
  return (
    <div posts={posts}>
      {posts.map((post) => (
        <Bloglist key={post.id} post={post} />
      ))}
    </div>
  );
}

export default Home;
