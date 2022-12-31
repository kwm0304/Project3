// module 21

import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const CREATE_USER = gql`
  mutation createUser($username: String!, $password: String!) {
    createUser(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const CREATE_CHARACTER = gql`
mutation createCharacter($race: race, $class: class, $name: name, $userId: userId) {
  createCharacter(race: $race, class: $class, name: $name, userId: $userId) {
      userId
      name
      race
      class
  }
}
`;
//Need to attach user id to character object

export const UPDATE_CHARACTER = gql`
mutation updateCharacter($characterId: ID, $update: update) {
  updateCharacter(
    characterId: $characterId
    update: $update
  )
  {
    username
  }
}`;

export const DELETE_CHARACTER = gql`
mutation deleteCharacter($characterId: ID) {
  deleteCharacter(characterId: $characterId) {
    username
  }
}`;
