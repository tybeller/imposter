import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
    return (
        <div className="header-container">
            <ul className='header-list'>
                <Link to='/' className='link'><li>Home</li></Link>
                <Link to='/Create' className='link'><li>Create a Crewmate</li></Link>
                <Link to='/' className='link'><li>Crewmate Gallery</li></Link>
            </ul>
        </div>
    )
}

export default Header