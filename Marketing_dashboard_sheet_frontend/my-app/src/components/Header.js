import "./Header.css";

export default function Header({ children }) {
  return (
    <header className="app-header">
      <div className="header-left">
        <img
          src="/kairali-logo.png"
          alt="Kairali Logo"
          className="logo"
        />
        <div className="brand-text">
          <h1>Kairali</h1>
          <span>Health through Ayurveda | Since 1908</span>
        </div>
      </div>

      <div className="header-center">
        <h2>🔍 Lead Search Dashboard</h2>
        <p>
          Search and access lead details effortlessly to streamline follow-ups
          and decision-making.
        </p>
      </div>

     
    </header>
  );
}
