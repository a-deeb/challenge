import Axios from "axios";

export async function getComments() {
  const res = await Axios.get("/comments");
  const comments = res.data;
  return comments;
}

export async function createComment(userId, content, commentId) {
  const res = await Axios.post("/comments", {
    user_id: userId,
    content: content,
 
  });
  const comment = res.data;
  return comment;
}
