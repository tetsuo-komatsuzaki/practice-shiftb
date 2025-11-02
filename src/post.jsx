import { posts } from "./data/posts";
import './App.css';
import PostItem from "./components/potItem/postItem";
import Header from "./components/header/header";

export default function Post() {

  return (

    <>
      {posts.map((elem) => (
        <PostItem key={elem.id} post={elem} />
      ))}

    </>

  );
}


