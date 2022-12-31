import React, { useState } from "react";
import { Form, Group, Label } from "react-bootstrap";
import { gql } from '@apollo/client';

const fantasyNameList = [
  "Aurora",
  "Balthazar",
  "Celeste",
  "Dorian",
  "Elysium",
  "Fiona",
  "Gwendolyn",
  "Hector",
  "Isolde",
  "Jupiter",
  "Keaton",
  "Luna",
  "Mara",
  "Nyx",
  "Octavia",
  "Pandora",
  "Quinn",
  "Raphael",
  "Serendipity",
  "Triton",
  "Ursula",
  "Violet",
  "Willow",
  "Xander",
  "Yara",
  "Zephyr",
];

function FantasyNameGenerator() {
  const [fantasyName, setFantasyName] = useState("");

  const handleNameGeneration = () => {
    const randomIndex = Math.floor(Math.random() * fantasyNameList.length);
    const randomName = fantasyNameList[randomIndex];
    setFantasyName(randomName);
  };

  return (
    <div className="nameimg">
    <Form className="flex-row justify-center mb-4">
      <Form.Group className="card">
        <Form.Label className="card-header bg-dark text-light p-2">
          Fantasy Name Generator
        </Form.Label>
        <button onClick={handleNameGeneration}>Generate Name</button>
        <p>{fantasyName}</p>
      </Form.Group>
    </Form>
    </div>
  );
}

export default FantasyNameGenerator;