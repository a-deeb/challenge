
import React, {useState} from "react";
import RepliesPanel from "../Replies/Replylist";
import "../App/App.css";

const Comment = (props) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const comment = props.comment;

  const enablePanel = (e) => {
    setIsEnabled(!isEnabled);
  };

  return (
    comment && (
      <div className="comment">
        <header className="comment__header">
          <h2 className="comment__heading">{comment.user.name} says...</h2>
          <span className="comment_timestamp">
            {new Intl.DateTimeFormat("en-US", {
              dateStyle: "medium",
              timeStyle: "short",
            }).format(new Date(comment.created_at))}
          </span>
        </header>
        <p className="comment__body">{comment.content}</p>
        <div
          onClick={enablePanel}
          className={`${isEnabled ? "active" : "collapsible"}`}
        >
          Replies
        </div>
        {isEnabled && <RepliesPanel commentId={comment.id} />}
      </div>
    )
  );
};

export default Comment;
