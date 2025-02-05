import '../../main'

export default function Header(){
    return(
        <div className="container">
            <ul class="nav">
            <li class="nav-item">
                <a class="nav-link active" href="#">QRManya - Générateur de QRCode</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">GitHub</a>
            </li>
            <li class="nav-item">
                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">2025 - dev-01</a>
            </li>
            </ul>
        </div>
    );
}