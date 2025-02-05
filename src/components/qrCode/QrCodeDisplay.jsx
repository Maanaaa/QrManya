import QRCode from "react-qr-code";
import Form from "../ui/Form";

export default function DisplayQrCode({qrValue = null}) {
    return(
        <div className="displayQrCode border border-primary">
            <QRCode value={qrValue} size="100%" />
        </div>
    );
}