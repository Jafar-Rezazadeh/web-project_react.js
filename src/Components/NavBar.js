import { Link } from "react-router-dom";
const NavBar = () => {
    return (
        <div className="NavBar">
            <ul>
                <li>
                    <Link to="/">خانه</Link>
                </li>

                <li>
                    <Link to="/about-us">درباره ما</Link>
                </li>

                <li>
                    <Link to="/contact-us">تماس با ما</Link>
                </li>

            </ul>
        </div>
    );
}

export default NavBar;
