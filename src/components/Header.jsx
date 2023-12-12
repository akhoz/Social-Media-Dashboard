import PropTypes from "prop-types";
import ThemeToggle from "./ThemeToggle.jsx";


function Header(props) {

    return (
        <div className="bg-headerDark grid grid-cols-1">
            <p className="text-white">
                Social Media Dashboard
            </p>
            <p className="text-titleDark">
                Total Followers: {props.totalFollowers}
            </p>
            <div>
                <p className="text-white">
                    Dark Mode
                </p>
                <ThemeToggle />
            </div>
        </div>
    );
}

Header.propTypes = {
    totalFollowers: PropTypes.number
}

export default Header;