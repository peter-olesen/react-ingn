import { NavLink } from "react-router-dom";
import { PATHS } from '../../router/paths';
import topStyle from './TopBar.module.scss'
import { useQuery } from "@tanstack/react-query";
import request from "graphql-request";
import { categories } from "../../queries/allCategories";
import { FaUser, FaBars } from "react-icons/fa";

export const TopBar = ({ isVisible, setisVisible }) => {
    const handleNavbar = () => {
        setisVisible((prev) => !prev);
  };

const { data, isLoading, error } = 
    useQuery({
    queryKey: ['categories'],
    queryFn: async () => request(import.meta.env.VITE_ENDPOINT, categories)
  });

    if (isLoading) {
    return <p>Loading...</p>;
    }

    if (error) {
    return <p>Error loading: {error.message}</p>;
    }

    return (
    <header className={topStyle.topHeader}>
        <div>
            <NavLink to={PATHS.home}>
                <h1>INGN</h1>
            </NavLink>
            <nav className={isVisible ? topStyle.visible : ''}>
                <ul>
                    <li>
                        <NavLink to="/">Alle</NavLink>
                    </li>
                    {data?.categories?.map((category, index) => (
                    <li key={index}>
                        <NavLink to={`category/${category.category}`}>
                                {category.category}
                        </NavLink>
                    </li>
                ))}
                </ul>
            </nav>
            <div className={topStyle.headerIcons}>
                <NavLink to={'/login'}>
                    <FaUser />
                </NavLink>
                <FaBars onClick={handleNavbar} />
            </div>
        </div>
    </header>
    )
};
