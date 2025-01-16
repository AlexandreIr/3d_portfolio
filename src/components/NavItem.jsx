import { navLinks } from "../constants"

function NavItem() {
  return (
    <ul className="nav-ul">
        {navLinks.map(link=>(
            <li key={link.id} className="nav-li">
                <a href={link.href} className="nav-li_a">{link.name}</a>
            </li>
        ))}
    </ul>
  )
}

export default NavItem