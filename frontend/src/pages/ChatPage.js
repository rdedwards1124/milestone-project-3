import "../Add-Style/ChatPage.css";
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import GrabUserName from "../pageInserts/GrabUserName";

function ChatPage() {
    const [comments, setComments] = useState([]);

    const getComments = async () => {
        const url = `http://localhost:4000/comments/`;
        const response = await fetch(url);
        const responseJSON = await response.json();
        if (responseJSON) {
            setComments(responseJSON);
        }
    };

    useEffect(() => {
        getComments();
    }, []);

    const filteredComments = comments.filter(
        (comment) => comment.trade === true
    );

    const allTradeComments = filteredComments.map((comment) => (
        <div className="EachComment" key={comment.comment_id}>
            <p>{comment.comment_text}</p>
            {comment.user_id ? (
                <GrabUserName User={comment.user_id} />
            ) : (
                <p>Unknown User</p>
            )}
        </div>
    ));

    const filteredComments2 = comments.filter(
        (comment) => comment.trade === false
    );

    const allGeneralComments = filteredComments2.map((comment) => (
        <div className="EachComment" key={comment.comment_id}>
            <p>{comment.comment_text}</p>
            {comment.user_id ? (
                <GrabUserName User={comment.user_id} />
            ) : (
                <p>Unknown User</p>
            )}
        </div>
    ));

    return (
        <>
            <div>
                <div>
                    <h1>Trainer Chat</h1>
                </div>
                <div className="Comments" >
                    <h3>Comments</h3>
                    <div className="CommentSection">
                        <div className="comments-container">
                            {allGeneralComments}
                        </div>
                    </div>
                    <h3>Trades</h3>
                    <div className="CommentSection">
                        <div className="comments-container">
                            {allTradeComments}
                        </div>
                    </div>
                </div>
                <div className="AddComment" >
                    <div>
                        <h3>Add a comment</h3>
                    </div>
                    <div className="CenterButton" >
                        <button>Click here to add</button>
                    </div>
                </div>
            </div>
        </>
    );
    /**/

    /*
    return(
        <>
            <div>
                <div>
                    <h1>Sorry... You must be logged in to access this page!</h1>
                </div>
                <div>
                    <img src="https://www.media.pokekalos.fr/img/site/erreur404.png" />
                </div>
                <div>
                    <Link to={`/`} ><p>Log In Here!</p></Link>
                    <p>or</p>
                    <Link to={`/`} ><p>Register Here!</p></Link>
                </div>
            </div>
        </>
    ) 
    
    */
}

export default ChatPage;

/*

const allComments = comments.map((comment)=>(
   
            <div key={comment.comment_id} >
                <p>{comment.comment_text}</p>
                <GrabUserName User={comment.user_id} />
            </div>
     
    ))

*/
