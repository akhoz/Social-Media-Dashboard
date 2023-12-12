import { useState } from 'react';
import classNames from "classnames";

function ThemeToggle() {
    const [isLightMode, setIsLightMode] = useState(false);

    const toggleTheme = () => {
        setIsLightMode(!isLightMode);
    };

    return (
        <div>
            <div className="flex w-10 h-5 bg-gradient-to-r from-gradientInit to-gradientEnd rounded-full md:w-14 md:h-7"
                 onClick={toggleTheme}>
                <span className={classNames(
                    "w-5 h-5 bg-headerDark rounded-full transition-all duration-300 md:w-7 md:h-7", {
                        "bg-white": isLightMode,
                        "translate-x-5": isLightMode,
                        "md:translate-x-7": isLightMode

                    })}
                />
            </div>
        </div>
    );
}

export default ThemeToggle;