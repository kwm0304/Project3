import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client'
import { UPDATE_CHARACTER } from '../Utils/mutations';

const UpdateCharacter = (props) => {
  const [formState, setFormState] = useState({
    name: props.location.propsData.name,
    race: props.location.propsData.race,
    class: props.location.propsData.class,
    strength: props.location.propsData.strength,
    dexterity: props.location.propsData.dexterity,
    constitution: props.location.propsData.constitution,
    intelligence: props.location.propsData.intelligence,
    wisdom: props.location.propsData.wisdom,
    charisma: props.location.propsData.charisma,
    proficiencyBonus: props.location.propsData.proficiencyBonus,
    passivePerception: props.location.propsData.passivePerception,
    background: props.location.propsData.background,
    alignment: props.location.propsData.alignment,
    weapons: props.location.propsData.weapons,
    image: props.location.propsData.image
  });

  // console.log(props.location.propsData);
  // const [updateCharacter] = useMutation(UPDATE_CHARACTER);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // submit the form data to the server here
    try {
      const { data } = UpdateCharacter({
        variables: {
          characterId: props.location.propsData._id,
          characterInput: formState,
        },
      });

      window.location.href = "./profile";
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="text" name="name" value={formState.name} onChange={handleChange} />

      <label htmlFor="race">Race:</label>
      <input type="text" name="race" value={formState.race} onChange={handleChange} />

      <label htmlFor="class">Class:</label>
      <input type="text" name="class" value={formState.class} onChange={handleChange} />

      <label htmlFor="strength">Strength:</label>
      <input type="number" name="strength" value={formState.strength} onChange={handleChange} />

      <label htmlFor="dexterity">Dexterity:</label>
      <input type="number" name="dexterity" value={formState.dexterity} onChange={handleChange} />

      <label htmlFor="constitution">Constitution:</label>
      <input type="number" name="constitution" value={formState.constitution} onChange={handleChange} />

      <label htmlFor="intelligence">Intelligence:</label>
      <input type="number" name="intelligence" value={formState.intelligence} onChange={handleChange} />

      <label htmlFor="wisdom">Wisdom:</label>
      <input type="number" name="wisdom" value={formState.wisdom} onChange={handleChange} />

      <label htmlFor="charisma">Charisma:</label>
      <input type="number" name="charisma" value={formState.charisma} onChange={handleChange} />

      <label htmlFor="spells">Spells:</label>
      <input type="text" name="spells" value={formState.spells.join(',')} onChange={handleChange} />

      <label htmlFor='alignment'>Alignment:</label>
      <input type='text' name='alignment' value={formState.alignment} onChange={handleChange} />

      <label htmlFor="proficiencyBonus">Proficiency Bonus:</label>
      <input type="number" name="proficiencyBonus" value={formState.proficiencyBonus} onChange={handleChange} />
    </form>
  );
};

export default UpdateCharacter;
