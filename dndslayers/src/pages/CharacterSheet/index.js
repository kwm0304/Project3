import React, { useState } from 'react'
// import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { CREATE_CHARACTER } from '../../Utils/mutations'
import { useMutation } from '@apollo/client';
// import { ReactSession } from 'react-client-session'

// function CharacterSheet() {
//Reference reactsessionstorage.get(key value tbd)
const CharacterSheet = () =>{

  const [formState, setCurrentState] = useState({
    // userId: ReactSession.get('userId'),
    name: '',
    image: '',
    race: '',
    class: '',
    strength: '',
    dexterity: '',
    constitution: '',
    intelligence: '',
    wisdom: '',
    charisma: '',
    background: '',
    alignment: '',
    passivePerception: '',
    proficiencyBonus: '',
    spells: ''
  })

  const [createCharacter] = useMutation(CREATE_CHARACTER);
  const handleFormSubmit = async (event) => {
    event.preventDefault()
    
      try {
        const { stats } = createCharacter({
          variables: {  ...formState },
          // const { stats } = createCharacter({
          //   key: { update : formState}
        });
      } catch (err) {
        console.log(err)
      }
  }

  const handleChange = (event) => {
    console.log("handle change")
    const { name, value } = event.target;
    console.log(formState)
    setCurrentState({...formState, [name]: value})
  }
  return (
    <div className='charsheetimg'>
    <Form onSubmit={handleFormSubmit} className='CharacterSheet'>
      <Form.Group className="mb-3" controlId="charactername">
        <Form.Label className='labelp'>Character Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Hingle McCringleberry"
          name="name"
          value={formState.name}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="characterrace">
        <Form.Label className='labelp'>Character Race</Form.Label>
        <Form.Control
          type="text"
          placeholder="Wood Elf"
          name="race"
          value={formState.race}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="characterclass">
        <Form.Label className='labelp'>Character Class</Form.Label>
        <Form.Control
          type="text"
          placeholder=""
          name="class"
          value={formState.class}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="characterImage">
        <Form.Label className='labelp'>Image</Form.Label>
        <Form.Control 
        type="text"  name='image' value={formState.image} onChange={handleChange}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="characterstats">
        <Form.Label className='labelp'>Character Stats</Form.Label>
        <Form.Group><Form.Label className='labelp'>Strength</Form.Label>
        <Form.Control 
        type="number"  name='strength' value={formState.strength} onChange={handleChange}/></Form.Group>
        <Form.Group><Form.Label className='labelp'>Dexterity</Form.Label>
        <Form.Control 
        type="number"  name='dexterity' value={formState.dexterity} onChange={handleChange}/></Form.Group>
        <Form.Group><Form.Label className='labelp'>Constitution</Form.Label>
        <Form.Control 
        type="number"  name='constitution' value={formState.constitution} onChange={handleChange}/></Form.Group>
        <Form.Group><Form.Label className='labelp'>Intelligence</Form.Label>
        <Form.Control 
        type="number"  name='intelligence' value={formState.intelligence} onChange={handleChange}/></Form.Group>
        <Form.Group><Form.Label className='labelp'>Wisdom</Form.Label>
        <Form.Control 
        type="number"  name='wisdom' value={formState.wisdom} onChange={handleChange}/></Form.Group>
        <Form.Group><Form.Label className='labelp' >Charisma</Form.Label>
        <Form.Control 
        type="number"  name='charisma' value={formState.charisma} onChange={handleChange}/></Form.Group>
        <Form.Group><Form.Label className='labelp'>Proficiency Bonus</Form.Label>
        <Form.Control 
        type="number"  name='proficiencyBonus' value={formState.proficiencyBonus} onChange={handleChange}/></Form.Group>
        <Form.Group><Form.Label className='labelp'>Passive Perception</Form.Label>
        <Form.Control 
        type="number"  name='passivePerception' value={formState.passivePerception} onChange={handleChange}/></Form.Group>
      </Form.Group>

      <Form.Group className='mb-3' controlId='spells'>
        <Form.Label className='labelp'>Spells</Form.Label>
        <Form.Control
        type='text' name='spells' value={formState.spells} onChange={handleChange} />
      </Form.Group>

      <Form.Group className='mb-3' controlId='weapons'>
        <Form.Label className='labelp'>Weapon</Form.Label>
        <Form.Control
        type='text' name='weapons' value={formState.weapons} onChange={handleChange} />
      </Form.Group>

      <Form.Group className='mb-3' controlId='background'>
        <Form.Label className='labelp'>Background</Form.Label>
        <Form.Control
        type='text' name='background' value={formState.background} onChange={handleChange} />
      </Form.Group>
      <button className="btn d-block w-100" type="submit">
                Submit
              </button>
    </Form>
    </div>
    
  );
};

export default CharacterSheet;