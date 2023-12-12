
import './App.css'
import Header from "./components/Header.jsx";
import Card from "./components/Card.jsx";
import SearchButton from "./components/SearchButton.jsx";
function App() {

    return (
        <div>
            <Header />
            <div className="flex items-center justify-center h-full">
                <div className="grid grid-cols-1 gap-8 py-5 w-11/12 md:py-24 md:w-3/4 md:grid-cols-2 lg:w-2/3 lg:py-26 lg:grid-cols-4">
                    <Card
                        borderColor="facebook"
                        icon="images/icon-facebook.svg"
                        iconAlt="Facebook Logo"
                        username="@username"
                        followers="1987"
                        textColor="text-limeGreen"
                        followersIcon="images/icon-up.svg"
                        amount="12"
                    />
                    <Card
                        borderColor="twitter"
                        icon="images/icon-twitter.svg"
                        iconAlt="Twitter Logo"
                        username="@username"
                        followers="1044"
                        textColor="text-limeGreen"
                        followersIcon="images/icon-up.svg"
                        amount="99"
                    />
                    <Card
                        borderColor="instagram"
                        icon="images/icon-instagram.svg"
                        iconAlt="Instagram Logo"
                        username="@username"
                        followers="11k"
                        textColor="text-limeGreen"
                        followersIcon="images/icon-up.svg"
                        amount="1099"
                    />
                    <Card
                        borderColor="youtube"
                        icon="images/icon-youtube.svg"
                        iconAlt="YouTube Logo"
                        username="@username"
                        followers="8239"
                        textColor="text-brightRed"
                        followersIcon="images/icon-down.svg"
                        amount="144"
                    />
                </div>
            </div>
            <div className="flex items-center justify-center">
                <SearchButton />
            </div>
        </div>
    );
}

export default App
