import React from 'react'
import Nav from '../Nav';

function Header(props) {
const { currentTab, setCurrentTab } = props;

return(
    <div>
        <section>
            <header className='flex-row'>
                <h1>DnD Slayers</h1>
            <div>
                <Nav currentTab={currentTab} setCurrentTab={setCurrentTab} />
            </div>
            </header>
            <section className='backgroundImg'>
                <div className='backgroundPic'></div>
                <div></div>
                <h2 className='welcome'></h2>
            </section>
        </section>
    </div>
)
}

export default Header