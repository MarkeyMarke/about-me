import NavBar from './NavBar';
import './styles/App.scss';
import WelcomeSection from './Sections/WelcomeSection';
import ExperienceSection from './Sections/ExperienceSection';
import DNDSection from './Sections/DNDSection';
import GameDevSection from './Sections/GameDevSection';

function App() {
    return (
        <div className="app">
            <NavBar />
            <div className="main-page">
                <WelcomeSection />
                <ExperienceSection />
                <DNDSection />
                <GameDevSection />
            </div>
        </div>
    );
}

export default App;
