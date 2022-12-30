// const faker = require('faker')
const userSeeds = require('./userSeeds.json')
const characterSeeds = require('./characterSeeds.json')
const db = require('../config/connection')
const { User, Character} = require('../models')

db.once('open', async () => {
    try {
        await Character.deleteMany({});
        await User.deleteMany({});

        await User.create(userSeeds);

        for (let i=0; i < characterSeeds.length; i++) {
            const { _id, characterOwner } = await Character.create(characterSeeds[i]);
            const user = await User.findOneAndUpdate(
                {username: characterOwner },
                {
                    $addToSet: {
                        characters: _id,
                    },
                }
            );
        }
    } catch (err) {
        console.error(err);
        process.exit(1);
    }

    console.log('all done');
    process.exit(0);
})