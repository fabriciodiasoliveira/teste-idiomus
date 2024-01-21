import { Link } from "react-router-dom/cjs/react-router-dom.min";
function Header() {
    return (
        <div className="div_header">
            <div className="float-container">

                <div className="div_logo">
                    <img className="logo" src='Images/logo.svg' alt="Logo" />
                </div>

                <div className="div_links">
                    <Link to="/"><img className="icon" src="Images/schedule.png" alt="Schedule Icon" />Schedule</Link>
                    <Link to="/leaderboard"><img className="icon" src="Images/leaderboard.png" alt="Leaderboard Icon" />Leaderboard</Link>
                </div>

            </div>
        </div>
    );
}

export default Header