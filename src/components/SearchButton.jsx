import { useTheme } from "../contexts/ThemeContext.jsx";

function SearchButton() {
    const { isLightMode } = useTheme();

    return (
        <div className="rounded-md p-px bg-gradient-to-r from-gradientInit to-gradientEnd inline-block">
            <button className={`${isLightMode ? "bg-bgLight" : "bg-bgDark"} rounded-md ${isLightMode ? "text-black" : "text-white"} text-center font-semi-bold px-6 py-3 text-lg hover:bg-gradient-to-r from-gradientInit to-gradientEnd hover:text-white`}>
                Search
            </button>
        </div>
    );
}

export default SearchButton;