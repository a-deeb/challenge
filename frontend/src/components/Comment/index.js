import React, {useState} from "react";

import CommentList from '../CommentList';
import useComments from "../../hooks/useComments";
import './Comment.css';

function Comment({comment, handleCommentReply}) {
  const { comments } = useComments();
  const childComments = comments.filter((c) => {
    return (c.comment_id === comment.id);
  });

  const [threadView, setThreadView] = useState(false);

  const toggleThread = (e) => {
    if (childComments.length) {
      setThreadView(!threadView)
    }
  };

  return (
    <div className="comment">
      <header className="comment__header">
        <h2 className="comment__heading">
          #{comment.id} {comment.user.name} says...
        </h2>
        <span className="comment_timestamp">
          {new Intl.DateTimeFormat("en-US", {
            dateStyle: "medium",
            timeStyle: "short",
          }).format(new Date(comment.created_at))}
        </span>
      </header>

      <p className="comment__body">{comment.content}</p>

      <div className="comment__footer">
        {childComments.length > 0 &&
          <div className="comment__reply-link">
            <a
              className="link"
              href='/#'
              onClick={(e) => {
                e.preventDefault();
                toggleThread();
              }}>
                {threadView
                  ? 'Hide replies'
                  : 'Show replies'
                }
            </a>
          </div>
        }

        <div className="comment__reply-link">
          <a
            className="link"
            href='/#'
            onClick={() => {
              toggleThread();
              handleCommentReply(comment);
            }}>
              Reply to {comment.user.name}
            </a>
        </div>
      </div>

      {threadView &&
        <div className="comment__replies">
          <CommentList
            comments={childComments}
            handleCommentReply={handleCommentReply}
          />
        </div>
      }
    </div>
  );
}

export default Comment;
