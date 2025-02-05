import '../../main'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Footer() {
    return (
        <footer className="container py-4 border-top">
            <div className="row align-items-center text-center">
                {/* Logo and Description */}
                <div className="col-md-6 d-flex flex-column align-items-center">
                    <a href="/" className="mb-2 text-body-secondary text-decoration-none">
                        <svg width="30" height="30" fill="currentColor" className="bi bi-qr-code">
                            <use xlinkHref="#qr-code"></use>
                        </svg>
                    </a>
                    <span className="text-body-secondary fw-bold">QrManya by Maanaaa</span>
                    <p className="text-muted small">
                        An open-source QR code generator built with React, Vite, and React-Qr-Code.
                    </p>
                </div>

                {/* GitHub & LinkedIn Links */}
                <div className="col-md-6 d-flex justify-content-center">
                    <a className="text-body-secondary mx-3 fs-4" href="https://github.com/your-profile" target="_blank">
                        <i className="bi bi-github"></i>
                    </a>
                    <a className="text-body-secondary mx-3 fs-4" href="https://linkedin.com/in/your-profile" target="_blank">
                        <i className="bi bi-linkedin"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
}
