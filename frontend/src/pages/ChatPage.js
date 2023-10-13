import "../Add-Style/ChatPage.css";
import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import GrabUserName from "../pageInserts/GrabUserName";
import { useAuth } from "../contexts/AuthContext";

function ChatPage() {
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(true);
    const [comments, setComments] = useState([]);
    const [text, setText] = useState("Create a comment");
    const [formControl, setFormControl] = useState(false);
    const { auth, userID } = useAuth();

    // Ensure userID is a number, default to null if not
    const x = parseInt(userID);
    const y = isNaN(x) ? null : x;

    // Define the initial state for newComment
    const [newComment, setNewComment] = useState({
        comment_text: "",
        user_id: y,
        trade: false,
        will_trade: "no trade",
        trade_for: "no trade",
    });

    // const [newComment2, setNewComment2] = useState({
    //     comment_text: "",
    //     user_id: y,
    //     trade: false,
    //     will_trade: "no trade",
    //     trade_for: "no trade",
    // });

    const getComments = async () => {
        const url = `http://localhost:4000/comments/`;
        const response = await fetch(url);
        const responseJSON = await response.json();
        if (responseJSON) {
            setComments(responseJSON);
        }
    };

    useEffect(() => {
        // Simulate a loading delay with setTimeout
        const delay = 2000; // Adjust this to your desired loading time (in milliseconds)
        setTimeout(() => {
            setIsLoading(false); // After the delay, set isLoading to false
        }, delay);

        // Fetch comments after the loading delay
        getComments();
    }, []);

    const filteredTradeComments = comments.filter(
        (comment) => comment.trade === true
    );

    const allTradeComments = filteredTradeComments.map((comment) => (
        <div className="EachComment" key={comment.comment_id}>
            <p>"{comment.comment_text}"</p>
            {comment.user_id ? (
                <GrabUserName User={parseInt(comment.user_id)} />
            ) : (
                <p>Unknown User</p>
            )}
        </div>
    ));

    const filteredGeneralComments = comments.filter(
        (comment) => comment.trade === false
    );

    const allGeneralComments = filteredGeneralComments.map((comment) => (
        <div className="EachComment" key={comment.comment_id}>
            <p>"{comment.comment_text}"</p>
            {comment.user_id ? (
                <GrabUserName User={parseInt(comment.user_id)} />
            ) : (
                <p>Unknown User</p>
            )}
        </div>
    ));

    const toggleButton = (e) => {
        e.preventDefault();
        if (text === "Create a comment") {
            setText("Enter comment");
            setFormControl(true);
        }
        if (text === "don't trade") {
            setText("trade");
            setFormControl(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        await fetch(`http://localhost:4000/comments/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newComment),
        });

        // Clear the comment input fields
        setNewComment({
            ...newComment,
            comment_text: "",
            user_id: y,
            trade: false,
            will_trade: "",
            trade_for: "",
        });

        // setNewComment2({
        //     ...newComment2,
        //     comment_text: "",
        //     trade: false,
        //     will_trade: "no trade",
        //     trade_for: "no trade",
        // });

        // Redirect to the chatpage
        history.push(`/`);
    };

    console.log(y);

    let form;

    if (formControl) {
        form = (
            <>
                <form onSubmit={handleSubmit}>
                    <div className="margin-below">
                        <label>Your Comment Here:</label>
                        <input
                            type="text"
                            name="text"
                            id="text"
                            className="form-control"
                            required
                            value={newComment.comment_text}
                            onChange={(e) =>
                                setNewComment({
                                    ...newComment,
                                    comment_text: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="margin-below">
                        <label>
                            Trade:
                            <input
                                type="checkbox"
                                name="trade"
                                className=""
                                checked={newComment.trade}
                                onChange={(e) =>
                                    setNewComment({
                                        ...newComment,
                                        trade: e.target.checked,
                                    })
                                }
                            />
                        </label>
                    </div>
                    <div className="margin-below">
                        <label>I will trade:</label>
                        <input
                            type="text"
                            name="will_trade"
                            id="will_trade"
                            className="form-control"
                            required
                            value={newComment.will_trade}
                            onChange={(e) =>
                                setNewComment({
                                    ...newComment,
                                    will_trade: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="margin-below">
                        <label>I need this Pokemon:</label>
                        <input
                            type="text"
                            name="trade_for"
                            id="trade_for"
                            className="form-control"
                            required
                            value={newComment.trade_for}
                            onChange={(e) =>
                                setNewComment({
                                    ...newComment,
                                    trade_for: e.target.value,
                                })
                            }
                        />
                    </div>
                    <input
                        className="btn btn-primary"
                        type="submit"
                        value="comment"
                    />
                </form>
            </>
        );
    } else {
        form = (
            <>
                <form onSubmit={handleSubmit}>
                    <div className="margin-below">
                        <label>Your Comment Here:</label>
                        <input
                            type="text"
                            name="text"
                            id="text"
                            className="form-control"
                            required
                            value={newComment.comment_text}
                            onChange={(e) =>
                                setNewComment({
                                    ...newComment,
                                    comment_text: e.target.value,
                                })
                            }
                        />
                    </div>
                    {/* <input
                        className="btn btn-primary"
                        type="submit"
                        value="comment"
                    /> */}
                </form>
            </>
        );
    }

    let trainerChat;
    if (auth) {
        if (comments.length > 0) {
            trainerChat = (
                <>
                    <div>
                        <div className="CenterIt">
                            <h1>Trainer Chat</h1>
                        </div>
                        <div className="Comments">
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
                        <div className="AddComment">
                            <div>
                                <h3>Add a comment</h3>
                                <button onClick={toggleButton}>{text}</button>
                            </div>
                            <div>{form}</div>
                        </div>
                    </div>
                </>
            );
        }
    } else {
        trainerChat = (
            <>
                <div>
                    <div className="CenterIt">
                        <h1>
                            Sorry... You must be logged in to access this page!
                        </h1>
                    </div>
                    <div>
                        <img
                            src="https://www.media.pokekalos.fr/img/site/erreur404.png"
                            alt="Error 404"
                        />
                    </div>
                    <div>
                        <Link to={`/login`}>
                            <p>Log In Here!</p>
                        </Link>
                        <p>or</p>
                        <Link to={`/signup`}>
                            <p>Register Here!</p>
                        </Link>
                    </div>
                </div>
            </>
        );
    }

    if (isLoading) {
        // Show a loading screen until isLoading becomes false
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        );
    }

    return <>{trainerChat}</>;
}

export default ChatPage;
