import { useState } from "react";
import { Alert, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";
import CommentArea from "./CommentArea";

const BookList = (props) => {
  const [savedInput, setSavedInput] = useState("");
  const [filteredBook, setFilteredBook] = useState(props.books);
  const [selectedBook, setSelectedBook] = useState("");

  const isSelected = (id) => {
    setSelectedBook(id);
  };

  const filterBookList = (value) => {
    const filteredBooks = props.books.filter((book) => book.title.toLowerCase().includes(value));
    // console.log(filteredBooks);
    setFilteredBook(filteredBooks);
  };

  const handleChange = (value) => {
    setSavedInput({ savedInput: value });
    filterBookList(value.toLowerCase());
  };

  return (
    <Container>
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">Find a book</InputGroup.Text>
        <Form.Control
          value={savedInput}
          placeholder="Digita un libro"
          onChange={(event) => {
            filterBookList();
            handleChange(event.target.value);
          }}
        />
      </InputGroup>
      <Row>
        <Col className="col-8">
          <Row>
            {filteredBook.map((book, index) => (
              <SingleBook book={book} id={selectedBook} isSelected={isSelected} key={index} />
            ))}
          </Row>
        </Col>
        <Col className="col-4">
          {isSelected ? (
            <CommentArea id={selectedBook} />
          ) : (
            <Alert variant="info" className="mt-4">
              Scegli un libro per visualizzarne i commenti
            </Alert>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default BookList;
