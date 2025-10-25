import { posts } from "./data/posts";
import './App.css';
import PostItem from "./components/postItem";
import Header from "./components/header";

export default function Post() {

    return(      
        
        <>
        <Header />
        {posts.map((elem) =>(
        <PostItem post={elem}/>
        ))}

        </>

    );
}


