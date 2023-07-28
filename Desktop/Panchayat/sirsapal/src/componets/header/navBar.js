import { menuItems } from './menuItems'
import MenuItems from './menuItems'
import './navBar.css'
const NavBar = () => {
    return (
        <nav>
            <ul className="menu">
                {menuItems.map((menu, index) => {
                    return <MenuItems items={menu} key={index} />
                })}
            </ul>
        </nav>
    )
}
export default NavBar