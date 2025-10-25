import logo from './logo.svg';
import './App.css';
import { posts } from './data/posts';
import Post from './post';

function App() {
  return (
    <div>
        <p>
          <Post/>
        </p>
    </div>
  );
}

export default App;
