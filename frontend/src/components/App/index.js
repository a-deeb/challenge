import React from "react";
import "./App.css";
import CommentsPanel from '../Comments/CommentsList'

function App() {
  return (
    <div className="comments-container">
      <header className="comments-header">
        <h1>Comments</h1>
      </header>
      <CommentsPanel />
    </div>
  );
}


export default App;
