import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  ListGroupItem,
  ListGroup,
  Col,
  Row,
  Button,
} from "react-bootstrap";
import { useMutation, useQuery } from "@apollo/client";
import { DELETE_CHARACTER } from "../../Utils/mutations"
import Auth from "../../Utils/auth";
import {QUERY_CHARACTERS  } from "../../Utils/queries";

function Character ({ characters }) {
  // const [removeChar] = useMutation(DELETE_CHARACTER);

  const { loading, data } = useQuery(QUERY_CHARACTERS);

  const logThis = (data) => {};

  // const handleUpdateChar = async (characterId) => {
  //   const token = Auth.loggedIn() ? Auth.getToken() : null;
  //   if (!token) {
  //     return false;
  //   }
  //   try {
  //     await updateChar({
  //       variables: { characterId }
  //     })
  //   }
  // }

  const userData = data;
  characters = data.allCharacters
  console.log(data)
  // const handleRemoveChar = async (characterId) => {
  //   const token = Auth.loggedIn() ? Auth.getToken() : null;
  //   if (!token) {
  //     return false;
  //   }
  //   try {
  //     await removeChar({
  //       variables: { characterId },
  //     });
  //     window.location.href="/profile";
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

 

  return (
    <div id="characterCards">
      <Row>
        {characters &&
          characters.map((character) => (
            <Col style={{ marginBottom: "20px" }}>
              <Card style={{ width: "200px" }}>
                <Card.Img variant="top" src={character.image} />
                <Card.Body>
                  <Card.Title>
                    Level: {character.level} {character.name}
                  </Card.Title>
                  <Card.Text>{character.background}</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>Race: {character.race}</ListGroupItem>
                  <ListGroupItem>Class: {character.class} </ListGroupItem>
                  <ListGroupItem>Weapon: {character.weapons} </ListGroupItem>
                  <ListGroupItem>
                    <ul style={{ padding: "0px", marginBottom: "1px" }}>
                      Strength: {character.strength}
                    </ul>
                    <ul style={{ padding: "0px", marginBottom: "1px" }}>
                      Dexterity: {character.dexterity}
                    </ul>
                    <ul style={{ padding: "0px", marginBottom: "1px" }}>
                      Constitution: {character.constitution}
                    </ul>
                    <ul style={{ padding: "0px", marginBottom: "1px" }}>
                      Intelligence: {character.intelligence}
                    </ul>
                    <ul style={{ padding: "0px", marginBottom: "1px" }}>
                      Wisdom: {character.wisdom}
                    </ul>
                    <ul style={{ padding: "0px", marginBottom: "1px" }}>
                      Charisma: {character.charisma}
                    </ul>
                  </ListGroupItem>
                </ListGroup>
                <Card.Body>
                  <Link
                    to={{
                      pathname: "/updateCharacter",
                      propsData: character,
                    }}
                  >
                    <Button>Edit</Button>
                  </Link>
                  {/* <Button
                    href="#"
                    onClick={() => handleRemoveChar(character._id)}
                  >
                    Delete
                  </Button> */}
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default Character;