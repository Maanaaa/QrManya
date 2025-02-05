import QRCode from "react-qr-code";

export default function DisplayQrCode({qrValue = null}) {
    return(
        <div className="displayQrCode border border-primary">
            <QRCode value={qrValue} size="100%" />
        </div>
    );
}