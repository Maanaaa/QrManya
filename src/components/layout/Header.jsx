export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#">
            QrManya
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://github.com/Maanaaa/QrManya"
                target="_blank"
              >
                GitHub
              </a>
            </li>
            <li className="nav-item">
              <span className="nav-link text-muted">v1.0.0</span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
