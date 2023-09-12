import { useEffect, useState } from "react";

import CommentList from "./CommentList";
import AddComment from "./AddComment";
const URL = "https://striveschool-api.herokuapp.com/api/comments/";
const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU4NTdjMWMwMzRmZjAwMTQwM2Y0ZjEiLCJpYXQiOjE2OTQwODg4NzgsImV4cCI6MTY5NTI5ODQ3OH0.XW49FgQjSHBLNp7b8LzgB31rJ7v9CRGspFQFQ6sAa8s",
  },
};

const CommentArea = (props) => {
  const [savedComments, setSavedComments] = useState([]);

  const fetchComments = async () => {
    try {
      const response = await fetch(URL, options);
      const comment = await response.json();
      const filteredComment = comment.filter((event) => event.elementId === props.id);

      setSavedComments(filteredComment);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [props.id]);

  return (
    <div className="mt-4">
      <CommentList list={savedComments} reloadFetch={fetchComments} />
      <AddComment id={props.id} reloadFetch={fetchComments} />
    </div>
  );
};

export default CommentArea;
