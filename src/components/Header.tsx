import './Header.css';

const logo = require(`../assets/Teamme_logo_BLACK.png`);

export default function Header() {
    
    return (
       <div className="header">
           <div className="header-logo-container">
                <img className="header-logo"src={logo} alt="Logo" />
           </div>
       </div>
    );
}