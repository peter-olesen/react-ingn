import { NavLink } from "react-router-dom";
import { PATHS } from '../../router/paths';
import topStyle from './TopBar.module.scss'

export const TopBar = ({ categories }) => (
    <header className={topStyle.topHeader}>
        <div>
            <NavLink to={PATHS.home}>
                <h1>INGN</h1>
            </NavLink>
            <nav>
                {categories.map((category, index) => (
                        <NavLink key={index} to={`/${category.category}`}>
                            {category.category}
                        </NavLink>
                ))}
            </nav>
            <div className={topStyle.headerIcons}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>                
            </div>
        </div>
    </header>
);
