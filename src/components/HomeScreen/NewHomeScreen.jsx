import useStyles from "./style";
import { useEffect, useState } from "react";
import { Paper, TextField, Box } from "@mui/material";
import { AiFillPlusCircle } from "react-icons/ai";
import { Typography } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getPostsAction, createPost } from "../../actions/post";
import { getComment, createComment } from "../../actions/comment";
import { useDispatch } from "react-redux";

const NewHomeScreen = () => {
  const { posts, isLoading } = useSelector((state) => state.posts);
  const { comments } = useSelector((state) => state.comment);
  const [quote, setQuote] = useState("");
  const [showComments, setShowComments] = useState({ state: false, id: -1 });
  const [postId, setPostId] = useState("");
  const [comment, setComment] = useState("");
  const [search, setSearch] = useState("");
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const userId = userInfo.id;
  const username = userInfo.username;

  const quoteData = {
    userId: `${userId}`,
    username: username,
    quote: quote,
  };

  const commentData = {
    userId: `${userId}`,
    username: username,
    comment: comment,
    postId: `${postId}`,
  };

  const createCommentHandler = () => {
    dispatch(createComment(commentData));
  };

  const createPostHandler = () => {
    if (userInfo) {
      dispatch(createPost(quoteData));
    }
  };

  useEffect(() => {
    if (!userInfo) {
      navigate("/");
    }
    dispatch(getPostsAction());
    dispatch(getComment());
  }, []);
  return (
    <>
      <div className={classes.bigContainer}>
        <div className={classes.container}>
          <div className={classes.languageIcon}>
            <img className={classes.svgImage} src="/postgre.svg" alt="" />
            <img className={classes.svgImage} src="/react.svg" alt="" />
            <img className={classes.svgImage} src="/python.svg" alt="" />
          </div>
          <TextField
            className={classes.searchBar}
            id="outlined-basic"
            variant="outlined"
            placeholder="Search Quotes here..."
            name="search"
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="">
            <Box className={classes.boxForIcon} maxWidth="sm">
              <input
                style={{ border: "none" }}
                className={classes.paper}
                name="quote"
                placeholder="Write a Quote here..."
                onChange={(e) => setQuote(e.target.value)}
              />

              <div className={classes.addIcon} onClick={createPostHandler}>
                <AiFillPlusCircle size={40} />
              </div>
            </Box>
          </div>
          {isLoading ? (
            "Loading"
          ) : (
            <div className={classes.quoteCardsConatiner}>
              {posts.length > 0 ? (
                <div className={classes.cardsContainer}>
                  {posts.map((val, i) => {
                    return (
                      <div key={i}>
                        {val.quote
                          .toUpperCase()
                          .includes(search.toUpperCase()) && (
                          <Box className={classes.card}>
                            <Paper className={classes.cardPaper}>
                              <Typography
                                style={{ fontWeight: "bold", color: "gray" }}
                              >
                                {val.username}
                              </Typography>
                              <Typography>{val.quote}</Typography>
                              <button
                                onClick={() => {
                                  setShowComments({
                                    state: true,
                                    id: val.id,
                                  });
                                  setPostId(val.id);
                                }}
                                className={classes.commentButton}
                              >
                                Tap to see Comments
                              </button>
                            </Paper>
                          </Box>
                        )}
                      </div>
                    );
                  })}
                  {/* <Box className={classes.card}>
                <Paper className={classes.cardPaper}>
                  <Typography>Username</Typography>
                  <Typography>Quote</Typography>
                </Paper>
              </Box>
              <Box className={classes.card}>
                <Paper className={classes.cardPaper}>
                  <Typography>Username</Typography>
                  <Typography>Quote</Typography>
                </Paper>
              </Box>
              <Box className={classes.card}>
                <Paper className={classes.cardPaper}>
                  <Typography>Username</Typography>
                  <Typography>Quote</Typography>
                </Paper>
              </Box> */}
                </div>
              ) : (
                <Paper elevation={20} style={{ width: "100%" }}>
                  <Typography
                    style={{ textAlign: "center", padding: "20px" }}
                    variant="h5"
                  >
                    No Data! Please Create a Post
                  </Typography>
                </Paper>
              )}
              <Paper className={classes.commentContainer}>
                {showComments.state === true && showComments.id == postId ? (
                  <>
                    <input
                      className={classes.writeComment}
                      placeholder="Write a Comment here..."
                      elevation={4}
                      name="comment"
                      onChange={(e) => setComment(e.target.value)}
                    />
                    <button
                      onClick={createCommentHandler}
                      className={classes.addCommentButton}
                    >
                      Add Comment
                    </button>
                    {comments.map((val2, i) => {
                      return (
                        <div key={i}>
                          {postId == val2.postId && (
                            <div>
                              <Paper
                                className={classes.commentUser}
                                elevation={6}
                              >
                                <Typography
                                  style={{
                                    fontSize: "14px",
                                    fontWeight: "bold",
                                    color: "gray",
                                  }}
                                >
                                  {val2.username}
                                </Typography>
                                <Typography>{val2.comment}</Typography>
                              </Paper>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </>
                ) : (
                  <Typography variant="h6" style={{ textAlign: "center" }}>
                    Please select a post to see Comments
                  </Typography>
                )}
              </Paper>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default NewHomeScreen;
