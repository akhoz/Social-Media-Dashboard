import PropTypes from "prop-types";
import { useTheme } from "../contexts/ThemeContext.jsx";

function Card(props) {
    const { isLightMode } = useTheme();

    const borderClass = `border-t-4 border-${props.borderColor} rounded-md`;

    return (
        <div className={`w-full ${isLightMode ? "bg-bgCardLight" : "bg-bgCardDark"} rounded-md ${borderClass} flex flex-col items-center justify-center transition-transform transform hover:scale-105`}>
            <div className="flex items-center my-5">
                <img src={props.icon} alt={props.iconAlt} />
                <p className="text-textColor ml-2">
                    {props.username}
                </p>
            </div>
            <p className={`${isLightMode ? "text-black" : "text-white"} font-bold text-6xl mb-2`}>
                {props.followers}
            </p>
            <p className="text-textColor">
                Followers
            </p>
            <div className="flex items-center my-5">
                <img src={`${props.followersIcon}`} alt="Up Arrow" />
                <p className={`${props.textColor} ml-1`}>
                    {props.amount} Today
                </p>
            </div>
        </div>
    );
}

Card.propTypes = {
    borderColor: PropTypes.string,
    icon: PropTypes.string,
    iconAlt: PropTypes.string,
    username: PropTypes.string,
    followers: PropTypes.number,
    textColor: PropTypes.string,
    followersIcon: PropTypes.string,
    amount: PropTypes.number
};

export default Card;