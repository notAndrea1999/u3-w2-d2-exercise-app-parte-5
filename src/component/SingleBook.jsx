import { Card, Col } from "react-bootstrap";

const SingleBook = (props) => {
  const handleChange = () => {
    props.isSelected(props.book.asin);
  };

  if (props.book.asin === props.id) {
    console.log(props.book.title);
  }
  return (
    <Col className="col-12 col-sm-6 col-md-4 col-lg-3 gy-4">
      <Card style={{ border: props.book.asin === props.id ? "3px solid red" : "2px solid lightgray" }}>
        <Card.Img
          variant="top"
          style={{
            height: "250px",
            objectFit: "contain",
          }}
          src={props.book.img}
          onClick={handleChange}
        />
        <Card.Body>
          <Card.Title className="text-truncate">{props.book.title}</Card.Title>
          <Card.Text>{props.book.price}$</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleBook;
