import React, { useEffect, useState } from "react";
import { Accordion, Badge, Button, Card } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import MainScreen from "../../components/MainScreen/MainScreen";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { noteListAction } from "../../action/notesAction";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";

const MyNotes = () => {
  const dispatch = useDispatch();
  const noteList = useSelector((state) => state.noteList);
  const { loading, notes, error } = noteList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const noteCreate = useSelector((state) => state.noteCreate);
  const { success: successCreate } = noteCreate;

  const noteUpdate = useSelector((state) => state.noteUpdate);
  const { success: successUpdate} = noteUpdate;

  const history = useHistory;

  const deleteHandler = () => {
    if (window.confirm("Are you sure you want to delete ?")) {
    }
  };

  useEffect(() => {
    dispatch(noteListAction());
    if (!userInfo) {
      history.push("/");
    }
  }, [dispatch, successCreate, history, userInfo, successUpdate]);

  return (
    <MainScreen title={`Welcome back ${userInfo.name}..!!`}>
      <Link to="/createnote">
        <Button style={{ marginLeft: "10px", maringBottom: "6px" }} size="lg">
          Create New Note
        </Button>
      </Link>
      {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
      {loading && <Loading />}
      {notes?.reverse().map((note) => (
        <Accordion key={note._id}>
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
                <Button href={`/notes/${note._id}`}>Edit</Button>
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
                  <Badge variant="success">Category - {note.category}</Badge>
                </h4>
                <blockquote className="blockquote mb-0">
                  <p>{note.content}</p>
                  <footer className="blockquote-footer">
                    Created on{" "}
                    <cite title="Source Title">
                      {note.createdAt.substring(0, 10)}
                    </cite>
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
