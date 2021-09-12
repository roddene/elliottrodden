

import Link from 'next/link'
function NavBar(){
    return ( <ul className = "navbar">
        <li className = "navitem"><Link href = "/">Home</Link></li>
        <li className = "navitem"><Link href = "/projects">Projects</Link></li>
        <li className = "navitem"><Link href = "/contact">Contact</Link></li>
        <li className = "navitem"><Link href = "/about">About</Link></li>
    </ul>
    )
}

export default NavBar;