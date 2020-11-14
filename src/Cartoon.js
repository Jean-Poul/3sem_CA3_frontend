import React, { useState, useEffect } from "react";
import { Form, Container, Row, Col, Button } from "react-bootstrap";
import { URLCartoons, URLCartoonsID } from "./settings";

const Cartoon = () => {
  const [cartoon, setCartoon] = useState("");

  const fetchCartoons = () => {
    fetch(URLCartoons)
      .then((res) => res.json())
      .then((data) => {
        setCartoon(data);
        console.log(data);
      });
  };

  const fetchCartoon = (cartoon) => {
    const URL = URLCartoonsID + cartoon;
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setCartoon(data);
      });
  };

  //loads joke first time
  useEffect(() => {
    fetchCartoons();
  }, []);

  const getCartoon = (evt) => {
    evt.preventDefault();
    fetchCartoon(cartoon);
  };

  const onChange = (evt) => {
    const num = evt.target.value;
    setCartoon(num);
  };

  return (
    <div>
      <Container>
        <h2>Info about all characters in Rick and Morty</h2>
        <Row className="mt-4">
          <Col>
            <p>
              name: <b>{cartoon.name}</b>
            </p>
            <p>
              Endpoint: <b>{JSON.stringify(cartoon.origin)}</b>
            </p>
            <p>
              Species: <b>{cartoon.species}</b>
            </p>
            <p>
              Type: <b>{cartoon.type}</b>
            </p>
            <p>
              Gender: <b>{cartoon.gender}</b>
            </p>
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col>
            <Button variant="primary mt-3" onClick={() => fetchCartoons()}>
              First person info
            </Button>
          </Col>
        </Row>
        <Form onChange={onChange} className="mt-4" label="">
          <Form.Label>Display specific info:</Form.Label>
          <Form.Control
            type="text"
            id="cartoonNum"
            placeholder="please enter a number between 2 and 671"
          />

          <Button onClick={getCartoon} variant="primary" type="submit">
            Get new character
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default Cartoon;
