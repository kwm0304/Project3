const { Character, User } = require('../models')
const { AuthenticationError } = require('apollo-server-express')
const { signToken } = require('../utils/auth')
const { populate } = require("../models/Character");

const resolvers = {
    Query: {
      me: async (parent, args, context) => {
        if (context.user) {
          const userData = await User.findOne({ _id: context.user._id })
            .select("-__v -password")
            .populate("characters");
  
          return userData;
        }
  
        throw new AuthenticationError("Not logged in");
      },
      user: async (parent, { username }) => {
        return User.findOne({ username })
        .select("-v -password")
        .populate("characters")
      },
      character: async (parent, { characterId }, context) => {
        const character = await Character.findOne({
          _id: characterId,
        });
        return character;
      },
  
      userCharacters: async (parent, args, context) => {
        if (context.user) {
          const userData = await User.findOne({ _id: context.user._id })
            .populate("characters")
            .exec();
          
  
          return userData.characters;
        }
      },
  
      allCharacters: async (parent, {}, context) => {
        const characters = await Character.find();
        
        return characters;
      },

      
    },
  
    Mutation: {
      createUser: async (parent, args) => {
        const user = await User.create(args);
        const token = signToken(user);
  
        return { token, User };
      },
  
      login: async (parent, { password }) => {
        const user = await User.findOne({ username });
  
        if (!user) {
          throw new AuthenticationError("No user found with this username");
        }
  
        const correctPassword = await user.isCorrectPassword(password);
  
        if (!correctPassword) {
          throw new AuthenticationError("Incorrect password");
        }
        const token = signToken(user);
        return { token, user };
      },
  
      createCharacter: async (parent, { update }, context) => {
        if (context.user) {
          const newCharacter = await Character.create(update);
  
          const updatedUser = await User.findByIdAndUpdate(
            { _id: context.user._id },
            { $push: { characters: newCharacter._id } },
            { new: true }
          )
            .populate("characters")
            .exec();
          ;
          return updatedUser;
        }
        throw new AuthenticationError("Not currently logged in");
      },
  
      deleteCharacter: async (parent, { characterId }, context) => {
        
  
        if (context.user) {
          
          const updatedUser = await User.findByIdAndUpdate(
            { _id: context.user._id },
            { $pull: { characters: characterId } },
            { new: true }
          );
  
          const character = await Character.findOneAndDelete({
            _id: characterId,
          });
          
          return updatedUser;
        }
      },
  
      updateCharacter: async (
        parent,
        { characterId, update },
        context
      ) => {
        if (context.user) {
         
          const updatedCharacter = await Character.findByIdAndUpdate(
            { _id: characterId },
            {
              name: update.name,
              race: update.race,
              image: update.image,
              class: update.class,
              strength: update.strength,
              dexterity: update.dexterity,
              constitution: update.constitution,
              intelligence: update.intelligence,
              wisdom: update.wisdom,
              charisma:update.charisma,
              passivePerception: update.passivePerception,
              proficiencyBonus: update.proficiencyBonus,
              background: update.background,
              alignment: update.alignment,
              weapons: update.weapons,
              items: update.items
            },
            { new: true }
          );
  
          
        }
      },
    },
  };
  module.exports = resolvers;