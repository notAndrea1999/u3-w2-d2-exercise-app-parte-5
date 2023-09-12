import { useState } from "react";
import { Button, Form } from "react-bootstrap";
const URL = "https://striveschool-api.herokuapp.com/api/comments/";

const AddComment = (props) => {
  // state = {
  //   comment: "",
  //   rate: "",
  //   elementId: this.props.id,
  // };

  // console.log(props.id);

  const [commentObj, setCommentObj] = useState({
    comment: "",
    rate: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(URL, {
        method: "POST",
        body: JSON.stringify({ ...commentObj, elementId: props.id }),
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU4NTdjMWMwMzRmZjAwMTQwM2Y0ZjEiLCJpYXQiOjE2OTQwODg4NzgsImV4cCI6MTY5NTI5ODQ3OH0.XW49FgQjSHBLNp7b8LzgB31rJ7v9CRGspFQFQ6sAa8s",
        },
      });
      if (response.ok) {
        setCommentObj({
          comment: "",
          rate: "",
        });
        props.reloadFetch();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form className="mt-3 " onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Inserisci un Commento</Form.Label>
        <Form.Control
          type="text"
          placeholder="Cosa ne pensi?"
          required
          value={commentObj.comment}
          onChange={(event) => {
            setCommentObj({ ...commentObj, comment: event.target.value });
          }}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicSelect">
        <Form.Label>Inserisci un voto</Form.Label>
        <Form.Select
          required
          value={commentObj.rate}
          onChange={(event) => {
            setCommentObj({ ...commentObj, rate: event.target.value });
          }}
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Form.Select>
      </Form.Group>

      <Button variant="primary" type="submit">
        Invia
      </Button>
    </Form>
  );
};

export default AddComment;
