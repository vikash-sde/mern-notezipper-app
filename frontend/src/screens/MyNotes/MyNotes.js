import React from "react";
import { Accordion, Badge, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import MainScreen from "../../components/MainScreen/MainScreen";
import notes from "../../data/notes";

const MyNotes = () => {
  const deleteHandler = () => {
    if (window.confirm("Are you sure you want to delete ?")) {
    }
  };
  return (
    <MainScreen title="Welcome back vikash">
      <Link to="/createnote">
        <Button style={{ marginLeft: "10px", maringBottom: "6px" }} size="lg">
          Create New Note
        </Button>
      </Link>
      {notes.map((note) => (
        <Accordion>
          <Card style={{ marginTop: "10px" }}>
            <Card.Header style={{ display: "flex" }}>
              <span
                style={{
                  color: "black",
                  textDecoration: "none",
                  flex: 1,
                  cursor: "pointer",
                  alignSelf: "center",
                  fontSize: "18px",
                }}
              >
                <Accordion.Toggle eventKey="0" as={Card.Text} variant="link">
                  {note.title}
                </Accordion.Toggle>
              </span>

              <div>
                <Button href={`/note/${note._id}`}>Edit</Button>
                <Button
                  variant="danger"
                  className="mx-2"
                  onClick={() => deleteHandler(note._id)}
                >
                  Delete
                </Button>
              </div>
            </Card.Header>

            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <h4>
                  <Badge variant='success'>
                    Category - {note.category}
                  </Badge>
                </h4>
                <blockquote className="blockquote mb-0">
                  <p>{note.content}</p>
                  <footer className="blockquote-footer">
                    Created on - date{" "}
                    <cite title="Source Title">Source Title</cite>
                  </footer>
                </blockquote>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      ))}
    </MainScreen>
  );
};

export default MyNotes;
