import React, { useState } from "react";
import {
  Label,
  Form,
  FormGroup,
  Input,
  Button,
  Card,
  CardBody,
} from "reactstrap";
import "./style.css";

const initialValues = {
  email: "",
  room: "",
};

const Lobby = () => {
  const [state, setState] = useState(initialValues);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container">
      <Card className="form-container">
        <h1 className="form-title">Lobby</h1>
        <CardBody>
          <Form onSubmit={handleSubmit}>
            <FormGroup className="form-group">
              <Label for="exampleEmail" className="form-label">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                className="form-input"
                placeholder="Email"
                type="email"
                onChange={(e) => setState({ ...state, email: e.target?.value })}
              />
            </FormGroup>

            <FormGroup className="form-group">
              <Label for="examplePassword" className="form-label">
                Room
              </Label>
              <Input
                id="room"
                name="room"
                className="form-input"
                placeholder="Room"
                type="text"
                onChange={(e) => setState({ ...state, room: e.target?.value })}
              />
            </FormGroup>
            <Button className="form-button" color="primary">
              Join
            </Button>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
};

export default Lobby;
