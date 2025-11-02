import Header from "../header/header";
import { useParams } from "react-router-dom";
import classes from "./detail.module.css";
import { posts } from "../../data/posts";

export default function Detail() {
  const { id } = useParams();
  const postDetail = posts.find(p => String(p.id) === id)
  const date = new Date(postDetail.createdAt)

  return (
    <>
      <div>
        <img src={postDetail.thumbnailUrl} alt="" className={classes.thumbnail}/>
      </div>
      <div className={classes.article}>
        <div className={classes.meta}>
          <span>{date.toLocaleDateString()}</span>
          <span>
            {postDetail.categories.map((text, index) => {
              return (
                <span className="categories" key={index}>{text}</span>
              )
            })}
          </span>
        </div>
        <h1>{`APIで取得した${postDetail.title}`}</h1>
        <div dangerouslySetInnerHTML={{ __html:postDetail.content }}></div>
      </div>
    </>
  )
}
