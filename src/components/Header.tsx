import "./Header.css";

const logo = require(`../assets/teamme-logo-black.png`);

export default function Header() {
  return (
    <div className="header">
      <div className="header-logo-container">
        <img className="header-logo" src={logo} alt="Logo" />
      </div>
    </div>
  );
}
