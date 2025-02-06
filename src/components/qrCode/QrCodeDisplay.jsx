import QRCode from "react-qr-code";

export default function DisplayQrCode({ qrValue, qrRef }) {
    return (
        <div className="displayQrCode border border-primary" ref={qrRef}>
            <QRCode value={qrValue} size="100%" bgColor="white" level="Q" />
        </div>
    );
}
