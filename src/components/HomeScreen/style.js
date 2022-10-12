import { makeStyles } from "@material-ui/core/styles";
import { purple } from "@material-ui/core/colors";

export default makeStyles((theme) => ({
  bigContainer: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    backgroundColor: "#f5f5f5",
    height: "100%",
    // flexDirection: "column",
  },
  container: {
    width: "80%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  languageIcon: {
    display: "flex",
    alignItems: "center",
    height: "80px",
    width: "250px",
    marginTop: "20px",
  },
  svgImage: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
  },
  paper: {
    // position: "relative",
    marginTop: "50px",
    padding: "20px 30px",
    width: "600px",
    height: "80px",
    fontWeight: "bold",
    color: "#525252",
    boxShadow: "2px 2px 10px 1px #ebebeb",
  },
  boxForIcon: {
    position: "relative",
  },
  addIcon: {
    position: "absolute",
    top: "150px",
    left: "600px",
    // border: "1px solid black",
    borderRadius: "100%",
    padding: "0",
    color: "#233554",
    backgroundColor: "white",
    cursor: "pointer",
  },
  searchBar: {
    width: "100%",
    backgroundColor: "white",
    marginTop: "20px",
  },

  quoteCardsConatiner: {
    display: "flex",
    width: "100%",
    marginTop: "50px",
    // alignItems: "center",
    // justifyContent: "space-between",
  },
  cardsContainer: {
    // backgroundColor: "blue",
    display: "flex",
    width: "70%",
    gap: "20px",
    // maxWidth: "950px",
    flexWrap: "wrap",
  },
  card: {
    // ba
    // backgroundColor: "blue",
    width: "400px",
    margin: "20px",
    // height: "100px",
  },

  cardPaper: {
    width: "100%",
    padding: "20px",
    // height: "100%",
  },

  commentButton: {
    fontWeight: "bold",
    padding: "6px 10px",
    marginTop: "5px",
    border: "none",
    backgroundColor: "#233554",
    borderRadius: "3px",
    color: "white",
    boxShadow: "2px 2px 10px 1px #ebebeb",
    cursor: "pointer",
  },

  commentContainer: {
    width: "30%",
    backgroundColor: "white",
    padding: "10px",
    maxHeight: "400px",
    overflowY: "scroll",
    display: "flex",
    flexDirection: "column",
  },

  writeComment: {
    padding: "10px",
    fontWeight: "bold",
    color: "gray",
    border: "none",
    boxShadow: "2px 2px 15px 10px #ebebeb",
  },

  commentUser: {
    marginTop: "8px",
    padding: "6px",
  },
  addCommentButton: {
    fontWeight: "bold",
    padding: "5px 5px",
    border: "none",
    marginTop: "10px",
    backgroundColor: "#233554",
    color: "white",
    borderRadius: "3px",
    cursor: "pointer",
    boxShadow: "2px 2px 10px 1px #ebebeb",
  },
}));
