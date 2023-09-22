import "../Add-Style/ChatPage.css";
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import GrabUserName from "../pageInserts/GrabUserName";

function ChatPage() {
    const [comments, setComments] = useState([])

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
    

    const allComments = comments.map((comment) => (
        <div key={comment.comment_id}>
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
                <div>
                    <h3>Comments</h3>
                    <div className="comments-container" >
                        {allComments}
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