import PropTypes from "prop-types";
import ThemeToggle from "./ThemeToggle.jsx";


function Header(props) {

    return (
        <div className="bg-headerDark grid grid-cols-1 py-5 px-4">
            <div>
                <p className="text-white">
                    Social Media Dashboard
                </p>
                <p className="text-titleDark">
                    Total Followers: {props.totalFollowers}
                </p>
            </div>

            <hr className="border-t-2 border-bgCardDark my-3" />

            <div className="flex items-center">
                <p className="text-white mr-auto">
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