import {useTheme} from "../contexts/ThemeContext.jsx";
import classNames from "classnames";

function ThemeToggle() {
    const { isLightMode, toggleTheme } = useTheme();

    return (
        <div>
            <div
                className="flex items-center w-10 h-5 bg-gradient-to-r from-gradientInit to-gradientEnd rounded-full md:w-14 md:h-7"
                onClick={toggleTheme}
            >
        <span
            className={classNames(
                "w-4 h-4 mx-1 bg-headerDark rounded-full transition-all duration-300 md:w-6 md:h-6",
                {
                    "bg-white": isLightMode,
                    "translate-x-4": isLightMode,
                    "md:translate-x-6": isLightMode,
                }
            )}
        />
            </div>
        </div>
    );
}

export default ThemeToggle;
