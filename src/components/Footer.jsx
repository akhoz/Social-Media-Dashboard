import {FaGithub} from "react-icons/fa";
import {BsTwitterX} from "react-icons/bs";
import { useTheme } from "../contexts/ThemeContext.jsx";

function Footer() {
    const { isLightMode } = useTheme();

    return (
        <footer className={`flex justify-center items-center ${isLightMode ? "bg-headerLight" : "bg-headerDark"}`}>
            <a href="https://github.com/akhoz" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-4xl mr-3 opacity-50 my-2" />
            </a>
            <a href="https://twitter.com/akhoz69" target="_blank" rel="noopener noreferrer">
                <BsTwitterX className="text-4xl opacity-50 my-2" />
            </a>
        </footer>
    );
}

export default Footer;