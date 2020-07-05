import React from 'react';
import Comments from "./Comments";
import "../App/App.css";


function CommentList({ comments,threadParent, handleCommentReply }){


return(
  <section className="comments">
    {[...comments]
      .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
      .map((comment) => (
        <Comments
          key={comment.id}
          comment={comment}
          handleCommentReply={handleCommentReply}
        />
      ))}
</section>
)

}

export default CommentList;