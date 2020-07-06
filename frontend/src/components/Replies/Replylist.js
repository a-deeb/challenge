import React from "react";
import useReplies from "../../hooks/useReplies";
import Reply from "./Reply";
import Composer from "../Composer/Composer";
import "../App/App.css";


const ReplyList = ( props ) => {
    const { commentId } = props;
    const {replies,createReply} = useReplies(commentId);
    
    const handleSubmit = (userId, content) => 
    createReply(userId, commentId, content);
    return(
        <div>   
        
        <Composer contentType={"Reply"} handleSubmit={handleSubmit}></Composer>        
            {[...replies]
                .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))           
                .map((reply)=>{
                    return <Reply key={reply.id}  reply={reply}/>
                })
            }
            
        </div>
    )
}
export default ReplyList;