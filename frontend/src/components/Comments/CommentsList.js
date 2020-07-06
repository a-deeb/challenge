import React from 'react';
import Comments from "./Comments";
import "../App/App.css";
import useComments from '../../hooks/useComments';
import Composer from "../Composer/Composer";

const CommentList = () => { 
  
  const {comments, createComment} = useComments();
  const handleSubmit = (userId, content) => createComment(userId, content);

return(
  <section className="comments">
  <Composer contentType={"Comment"} handleSubmit={handleSubmit}></Composer>
    {[...comments]
      .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
      .map((comment) => (
        <Comments
          key={comment.id}
          comment={comment}      
        />
      ))}
</section>
)}

export default CommentList;