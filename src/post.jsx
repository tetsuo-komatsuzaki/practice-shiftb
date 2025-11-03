// import { posts } from "./data/posts";
import './App.css';
import PostItem from "./components/potItem/postItem";
import Header from "./components/header/header";
import { posts_URL } from './data/posts';

import { useEffect, useState} from "react";

export default function Post() {
  const [posts,setPosts] = useState([]);
  const [loading,setLoading] = useState(false)

useEffect(() =>{
  const fetcher = async() =>{
    setLoading(true)
    const res = await fetch(`${posts_URL}/posts`)
    const {posts} = await res.json();
    setPosts(posts)
    setLoading(false)
  }
  fetcher()
},[])
if(loading){
  return <div>読み込み中...</div>
}

if(!loading&&posts.length === 0){
  return <div>記事が見つかりません</div>
}

  return (

    <>
      {posts.map((elem) => (
        <PostItem key={elem.id} post={elem} />
      ))}

    </>

  );
}


