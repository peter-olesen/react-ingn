import { NavLink } from "react-router-dom";
import { PATHS } from '../../router/paths';
import topStyle from './TopBar.module.scss'
import { useFetchCategories } from '../../hooks/queryFetch';
import { FaUser, FaBars } from "react-icons/fa";

export const TopBar = () => {

const { data, isLoading, error } = useFetchCategories();

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
            <nav>
                <ul>
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
                <NavLink to={'Login'}>
                    <FaUser />
                </NavLink>
                {/* <FaBars /> */}
            </div>
        </div>
    </header>
    )
};
