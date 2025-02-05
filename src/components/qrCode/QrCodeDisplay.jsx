import QRCode from "react-qr-code";
export default function DisplayQrCode(){

    return(
        <div className="displayQrCode border border-primary">
            <QRCode value="{qr-value}" size="100%" />
        </div>
    );
}