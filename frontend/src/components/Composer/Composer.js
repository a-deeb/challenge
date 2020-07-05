import React, { useEffect, useState, useRef, useCallback } from "react";
import autosize from "autosize";

import useComments from "../../hooks/useComments";
import useUsers from "../../hooks/useUsers";
import "../App/App.css";

function CommentComposer({parentComment}) {
  const { createComment } = useComments();
  const { users } = useUsers();
  const textareaRef = useRef();

  const [userId, setUserId] = useState(null);
  const [content, setContent] = useState("");
  const [parent, setParent] = useState(null);

  useEffect(() => {
    autosize(textareaRef.current);
  }, []);

  useEffect(() => {
    if (users.length) {
      setUserId(users[0].id);
    }
  }, [users]);

  useEffect(() => {
    if (parentComment) {
      setParent(parentComment);
    }
  }, [parentComment]);

  const handleContentChange = (e) => setContent(e.target.value);

  const handleUserChange = (e) => setUserId(parseInt(e.target.value));

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      if (!userId) {
        alert("No user selected");
        return;
      }

      if (parent) {
        createComment(userId, content, parent.id);
      } else {
        createComment(userId, content, null);
      }

      setContent("");
      setParent(null);
    },
    [userId, content, parent, createComment]
  );

  const composeHeading = parent
    ? `Replying to ${parent.user.name} #${parent.id}`
    : 'You say...';

  return (
    <section className="compose">
      <h2 className="compose__heading">
        {composeHeading}
      </h2>

      <form className="compose__body" onSubmit={handleSubmit}>
        <textarea
          ref={textareaRef}
          rows={4}
          placeholder="Enter some text"
          required
          autoFocus
          value={content}
          onChange={handleContentChange}
          className="compose__textarea"
        />
        <div className="compose__dropdown">
          <label htmlFor="user-select">Comment as</label>
          <select
            id="user-select"
            onChange={handleUserChange}
            className="dropdown"
          >
            {users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
          </select>
        </div>
        <div className="compose__button">
          <button className="button button--primary">Submit</button>
        </div>
      </form>
    </section>
  );
}

export default CommentComposer;