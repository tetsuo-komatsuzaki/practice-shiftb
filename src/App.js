import logo from './logo.svg';
import './App.css';
import { posts } from './data/posts';
import Post from './post';
import Inquiry from './components/inquiry/inquiry';
import { Route, Routes } from 'react-router-dom';
import Detail from './components/detail/detail';

function App() {
  return (
    <div>
      <Routes>
         <Route path="/" element={<Post />} />
        <Route path="/inquiry" element={<Inquiry />} />
        <Route path="/post/:id" element={<Detail/>}/>
      </Routes>

    </div>
  );
}

export default App;
