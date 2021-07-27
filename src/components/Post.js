import { Avatar, IconButton } from "@material-ui/core";
import "./Post.css";
import { useStateValue } from "../Statetprovider";
import DeleteIcon from "@material-ui/icons/Delete";
import { ThumbUpAltOutlined } from "@material-ui/icons";
import {db} from "../firebase";
import React, { forwardRef } from 'react';

const Post = forwardRef(({id, title, text, isBlue, username, avatar}, ref) => {
    const [{user}, dispatch] = useStateValue()

    const removePost = () => {
        db.collection("posts").doc(id).delete()
    }

    const likePost = () => {
        const likedPost = db.collection("posts").doc(id)
        likedPost.get().then(doc=>likedPost.update({
            isBlue: !doc.data().isBlue
        }))
    }

    return (
        <div className="post" ref={ref}>
            <div className="post__body">
                <div className="post__bodyLeft">
                    <Avatar className="avatar" src={avatar}/>
                    <h2>{title}</h2>
                    <h4>{text}</h4> 
                </div>
                <IconButton onClick={removePost}>
                    <DeleteIcon/>
                </IconButton>
            </div>
            <div className="post__icons">
            <IconButton onClick={likePost}>
                <ThumbUpAltOutlined color={isBlue ? "primary" : ""}/>
            </IconButton>
            {username}
            </div>
        </div>
    )
})

export default Post
