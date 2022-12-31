// module 20.3.5 & 20.3.6

import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const homeCharacter = ({ characters }) => {
    if (!characters.length) {
        return <h4>No Characters!</h4>;
    }

    return (
    <div id="characterCards">
        <Row>
            {characters &&
                characters.map((character) => (
                    <Col>
                        <Card id="cardBody">
                            <Card.Body>
                                <Card.Img src={character.image} key={character.id} />
                                <Card.Title>{character.name}</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
    </div>
    );
};

export default homeCharacter;