
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import {
  fetchReplies,
  repliesSelector,
  createReply as _createReply,
} from "../redux/replies";

function useReplies() {
  const dispatch = useDispatch();
  const replies = useSelector(repliesSelector);
  
  useEffect(() => {
    dispatch(fetchReplies());
  }, [dispatch]);

  const createReply = (userId, comment_id, content) =>
    dispatch(_createReply(userId, comment_id, content));
  
  return { replies, createReply };
}

export default useReplies;