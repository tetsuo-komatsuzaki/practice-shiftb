import { useParams } from "react-router-dom";
import classes from "./detail.module.css";
import { posts_URL } from "../../data/posts";
import { useState, useEffect } from "react";

export default function Detail() {
  const { id } = useParams();
  const [postsDetail, setPostDetail] = useState(null);
  const [loading, setLoading] = useState(false)


  useEffect(() => {
    const fetcher = async () => {
      setLoading(true)
      const res = await fetch(`${posts_URL}/posts/${id}`)
      const { post } = await res.json()
      setPostDetail(post)
      setLoading(false)
    };
    fetcher()
  }, [id]);
  if (loading) {
    return <div>読み込み中...</div>
  }

  if (!loading && !postsDetail) {
    return <div>記事が見つかりません</div>
  }



  return (
    <>
      <div>
        <img src={postsDetail.thumbnailUrl} alt="" className={classes.thumbnail} />
      </div>
      <div className={classes.article}>
        <div className={classes.meta}>
          <span>{new Date(postsDetail.createdAt).toLocaleDateString()}</span>
          <span>
            {postsDetail.categories.map((text, index) => {
              return (
                <span className="categories" key={index}>{text}</span>
              )
            })}
          </span>
        </div>
        <h1>{`APIで取得した${postsDetail.title}`}</h1>
        <div dangerouslySetInnerHTML={{ __html: postsDetail.content }}></div>
      </div>
    </>
  )
}
