import { Link } from "react-router-dom/cjs/react-router-dom.min";
function Header() {
    return (
        <div className="div_header">
            <div class="float-container">

                <div class="div_logo">
                    <img className="logo" src='Images/logo.svg' alt="Logo" />
                </div>

                <div class="div_links">
                    <Link className="align_link" to="/"><img className="icon" src="Images/schedule.png" alt="Schedule Icon" />Schedule</Link>
                    <Link className="align_link" to="/leaderboard"><img className="icon" src="Images/leaderboard.png" alt="Leaderboard Icon" />Leaderboard</Link>
                </div>

            </div>
        </div>
    );
}

export default Header