// import { posts } from "./data/posts";
import './App.css';
import PostItem from "./components/potItem/postItem";
import Header from "./components/header/header";
import { posts_URL } from './data/posts';

import { useEffect, useState} from "react";

export default function Post() {
  const [posts,setPosts] = useState([]);

useEffect(() =>{
  const fetcher = async() =>{
    const res = await fetch(`${posts_URL}/posts`)
    const {posts} = await res.json();
    setPosts(posts)
  }
  fetcher()
},[])

  return (

    <>
      {posts.map((elem) => (
        <PostItem key={elem.id} post={elem} />
      ))}

    </>

  );
}


