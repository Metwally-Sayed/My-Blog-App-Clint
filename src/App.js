import { Route, Routes } from 'react-router-dom';
import Profile from './compo/Profile';
import Home from './compo/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './compo/Nav';
import Create from './compo/Create';
import Postdetails from './compo/Postdetails';
import { useDispatch } from 'react-redux';
import { getAllPosts } from './redux/actions/actions';
import Axios from 'axios';
import { useEffect } from 'react';
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    Axios.get('http://localhost:8080/posts')
      .then((res) => {
        dispatch(getAllPosts(res.data.data));
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/create" element={<Create />} />
        <Route path="/Postdetails/:id" element={<Postdetails />} />
      </Routes>
    </div>
  );
}

export default App;
