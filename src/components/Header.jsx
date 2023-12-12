import PropTypes from "prop-types";
import ThemeToggle from "./ThemeToggle.jsx";


function Header(props) {

    return (
            <div className="bg-headerDark rounded-b-2xl grid grid-cols-1 pt-5 pb-10 px-4 md:grid-cols-2 md:pt-10 md:pb-20 md:px-28">
            <div>
                <p className="text-white">
                    Social Media Dashboard
                </p>
                <p className="text-titleDark">
                    Total Followers: {props.totalFollowers}
                </p>
            </div>

            <hr className="border-t-2 border-bgCardDark my-3 md:hidden" />

            <div className="flex items-center md:justify-end">
                <p className="text-white mr-auto md:mr-2">
                    Theme
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