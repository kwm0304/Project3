import React from 'react'
import {Link} from 'react-router-dom';
import { ReactSession } from 'react-client-session'
import Form from 'react-bootstrap/Form';
function logout() {
    ReactSession.set('username', null)
    ReactSession.set('userId', null)
    console.log('oops')

}
function Nav() {

    if (ReactSession.get('userId') != null ){
        return (
            <div className='nav-wrapper'>
              {/* Nav list */}
              <ul className="">
                <h2>Hello {ReactSession.get('username')}</h2>
                  <Link as={Link} className="p-2 duration-300 hover:scale-105" to='/CharacterSheet'>
                            Create
                          </Link>
                  <Link as={Link} className="p-2 duration-300 hover:scale-105" to='/diceroller'>
                            Dice Roller
                          </Link>
                  <Link as={Link} className="p-2 duration-300 hover:scale-105" to='/profile'>
                            My Profile
                          </Link>
                  <Link as={Link} className="p-2 duration-300 hover:scale-105" to='/NameGenerator'>
                            Name Generator
                          </Link>
                  <Link as={Link} className="p-2 duration-300 hover:scale-105" to='/Character'>
                            Characters
                          </Link>
                          <Form>
                          <button onClick={logout}>Log Out</button>
                          </Form>
              </ul>
            </div>
        
            
          )
    } else {
    return (
        <div className='nav-wrapper'>
          {/* Nav list */}
          <ul className="">
            
              <Link as={Link} className="p-2 duration-300 hover:scale-105" to='/login'>
                        Log In
                      </Link>
        
              <Link as={Link} className="p-2 duration-300 hover:scale-105" to='/signup'>
                        Sign Up
                      </Link>
           
              <Link as={Link} className="p-2 duration-300 hover:scale-105" to='/CharacterSheet'>
                        Create
                      </Link>
              <Link as={Link} className="p-2 duration-300 hover:scale-105" to='/diceroller'>
                        Dice Roller
                      </Link>
              <Link as={Link} className="p-2 duration-300 hover:scale-105" to='/profile'>
                        My Profile
                      </Link>
              <Link as={Link} className="p-2 duration-300 hover:scale-105" to='/NameGenerator'>
                        Name Generator
                      </Link>
          </ul>
        </div>
    
        
      )
    }
}


export default Nav