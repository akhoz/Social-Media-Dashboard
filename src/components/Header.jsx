import PropTypes from "prop-types";
import ThemeToggle from "./ThemeToggle.jsx";
import { useTheme } from "../contexts/ThemeContext.jsx";
import SearchButton from "./SearchButton.jsx";

function Header(props) {
    const { isLightMode } = useTheme();

    return (
        <div className={`${isLightMode ? "bg-headerLight" : "bg-headerDark"} rounded-b-2xl grid grid-cols-1 pt-5 pb-10 px-4 md:grid-cols-2 md:pt-10 md:pb-20 md:px-28`}>
            <div>
                <p className={`${isLightMode ? "text-black" : "text-white"} font-bold`}>
                    Social Media Dashboard
                </p>
                <p className="text-textColor">
                    Total Followers: {props.totalFollowers}
                </p>
            </div>

            <hr className={`border-t-2 ${isLightMode ? "border-bgCardLight" : "border-bgCardDark"} my-3 md:hidden`} />

            <div className="flex items-center md:justify-end">
                <p className={`${isLightMode ? "text-black" : "text-white"} mr-auto md:mr-2 font-bold`}>
                    Theme
                </p>
                <ThemeToggle />
            </div>
            <div>
            </div>
            <div className="flex justify-end pt-3">
                <SearchButton />
            </div>
        </div>
    );
}

Header.propTypes = {
    totalFollowers: PropTypes.number
};

export default Header;
