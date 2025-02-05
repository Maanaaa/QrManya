import QRCode from "qrcode.react";

const GenerateQrCode = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <QRCode value="https://example.com" />
    </div>
  );
};

export default GenerateQrCode;
