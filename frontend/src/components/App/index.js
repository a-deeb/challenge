import React, {useEffect, useState} from "react";

import "./App.css";

import useComments from "../../hooks/useComments";
import CommentComposer from '../Composer/Composer';
import CommentList from '../Comments/CommentsList';

function App() {
  const { comments } = useComments();
  const [parentComment, setParentComment] = useState(null);
  
  useEffect(() => {
    setParentComment(parentComment);
  }, [parentComment]);

  return (
    <div className="comments-container">
      <header className="comments-header">
        <h1>Comments</h1>
      </header>

      <CommentComposer parentComment={parentComment}/>
      <CommentList
        comments={comments.filter((c) => c.comment_id === null)}
        handleCommentReply={setParentComment}
      />
    </div>
  );
}

export default App;
