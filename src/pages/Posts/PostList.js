import { useState, useEffect } from "react";
import CardPost from "./CardPost";
import api from "../../apis/api";
import "../../assets/styles/postlist.css";

function PostList() {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    async function fetchPost() {
      try {
        const response = await api.get("/lista-post");

        setPostList([...response.data]);
      } catch (err) {
        console.error(err);
      }
    }
    fetchPost();
  }, []);

  return (
    <div className="postdiv">
      <div className="list-group">
        {postList.map((currentPostObj) => (
          <CardPost key={currentPostObj._id} {...currentPostObj} />
        ))}
      </div>
    </div>
  );
}
export default PostList;
