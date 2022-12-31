import { gql } from '@apollo/client'

export const QUERY_CHARACTERS = gql`
query allCharacters {
    allCharacters{
        name
    }
}`;

export const QUERY_USER = gql`
query user($username: String!) {
    user(username: $username) {
        _id
        username
        characters{
            name
            stats
        }
    }
}`

export const QUERY_ME = gql`
query me {
    me {
        _id
        username
        characters {
            _id
            name
            race
            image
            class
            background
            proficiencyBonus
            passivePerception
            strength
            dexterity
            constitution
            intelligence
            wisdom
            charisma
            level
            spells
            weapons
        }
    }
}`

export const QUERY_MY_CHARACTERS = gql`
query userCharacter {
    userCharacter {
        name
        race
        image
        class
        background
    }
}`

export const QUERY_ONE_CHARACTER = gql`
query character($characterId: ID) {
    character(characterId: $characterId) {
        name
        race
        class
        weapons
        image
    }
}`
