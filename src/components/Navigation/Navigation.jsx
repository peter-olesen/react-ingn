import { NavLink } from "react-router-dom";
import { PATHS } from '../../router/paths';

const navItems = [
    { id: 1, path: PATHS.home, label: 'Home' },
    { id: 2, path: PATHS.about, label: 'About' },
    { id: 3, path: PATHS.contact, label: 'Contact' }
];

export const Navigation = () => (
    <nav>
        {navItems.map((item) => (
            <NavLink key={item.id} to={item.path}>
                {item.label}
            </NavLink>
        ))}    
    </nav>
);
