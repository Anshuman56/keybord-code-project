import { useState } from "react"
import Dropdown from "./dropdown"
import './menuItem.css'


export const menuItems = [
    {
        title: 'Home',
        url: '/',
    },
    {
        title: 'About Panchayat',
        url: '/About Panchayat',
    },
    {
        title: 'Self Employment',
        url: '/Self Employment',
    },
    {
        title: 'Schemes',
        url: '/Schemes',
        submenu: [
            {
                title: 'BSY',
                url: './BSY',
            },
            {
                title: 'MMSY',
                url: './MMSY',
            },
            {
                title: 'OMBDC',
                url: './OMBDC',
            },
            {
                title: 'PMGSY',
                url: './PMGSY',
            },
            {
                title: 'RIDF',
                url: './RIDF',
            },

        ]
    },
    {
        title: 'Culture & Sports',
        url: '/Culture & Sports',
    },
    {
        title: 'Health',
        url: '/Health',
    },
    {
        title: 'Education',
        url: '/Education',
        submenu: [
            {
                title: 'School',
                url: './School',
            },
            {
                title: 'Collage',
                url: './Collage',
            },
        ]
    },
]

const MenuItems = ({ items }) => {
    const [dropdown, setDropdown] = useState(false)
    // const dropmenu = () => {
    //     setDropdown(!dropdown)
    //     console.log(dropdown)
    // }
    return (<li className='menu-items'>
        {items.submenu ? (
            <>
                <button type="button" aria-haspopup='menu' aria-expanded={dropdown ? "true" : "false"}
                    onClick={() => setDropdown((prev) => !prev)}>
                    {items.title}{' '}
                </button>
                <Dropdown submenus={items.submenu} dropdown={dropdown} />
            </>
        ) : (<a href={items.url}>{items.title}</a>)}

    </li>)
}
export default MenuItems