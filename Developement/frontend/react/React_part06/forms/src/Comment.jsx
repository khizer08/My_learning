import { useState } from "react";
import "./Comment.css";
import CommentsForms from "./CommentsForm";

function Comment() {
  let [comments, setComments] = useState([
    {
      username: "@sk",
      remark: "Great job!",
      rating: 5,
    },
  ]);

  let addNewComment = (comment) => {
    setComments((currComments) => [...currComments, comment]);
  };
  return (
    <>
      <div>
        <h3>All comments</h3>
        {comments.map((comment, idx) => (
          <div className="comment" key={idx}>
            <span>
              <i>{comment.remark}</i>
            </span>
            &nbsp;
            <span>(rating={comment.rating})</span>
            <p>-{comment.username}</p>
          </div>
        ))}
      </div>
      <hr></hr>
      <CommentsForms addNewComment={addNewComment} />
    </>
  );
}

export default Comment;
