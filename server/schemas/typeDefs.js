const { gql } = require('apollo-server-express')
//! after property means non-null in gql
const typeDefs = gql`
type User {
    _id: ID!
    username: String
    password: String
    characters: [Character]
}

type Character {
    _id: ID
    name: String!
    user: User
    race: String
    image: String
    class: String
    strength: Int
    dexterity: Int
    constitution: Int
    intelligence: Int
    wisdom: Int
    Charisma: Int
    level: Int
    alignment: String
    spells: String
    proficiencyBonus: Int
    passivePerception: Int
    weapons: String
    
}

input update {
    name: String!
    race: String!
    image: String
    class: String!
    background: String
    strength: Int
    dexterity: Int
    constitution: Int
    intelligence: Int
    wisdom: Int
    charisma: Int
    level: Int
    hitPoints: Int
    alignment: String
    items: String
    weapons: String
}

type Auth {
    token: ID!
    user: User
}

type Query {
    me: User
    user(username: String!): User
    allCharacters: [Character]
    character(characterId: ID): Character
    userCharacters: [Character]
}

type Mutation {
    createUser(username: String!, password: String!): Auth
    login(username: String!, password: String!): Auth
    deleteCharacter(characterId: ID): User
    createCharacter(update: String): Character
    updateCharacter(characterId: ID, update: update): User 
}`

module.exports = typeDefs;
