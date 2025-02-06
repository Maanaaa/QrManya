
export const downloadQRCode = (qrRef) => {
    // Convert the SVG to canvas to download
    const svg = qrRef.current.querySelector('svg');

    const svgData = new XMLSerializer().serializeToString(svg);
    const svgBlob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" }); 
    const url = URL.createObjectURL(svgBlob);

    const image = new Image();

    image.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = svg.clientWidth;
        canvas.height = svg.clientHeight;
        const canvasContext = canvas.getContext('2d');

        canvasContext.drawImage(image, 0, 0, 100, 100);
        URL.revokeObjectURL(url);

        const pngURL = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = pngURL;
        link.download = 'qrcode-qrmanya.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    image.src = url;

};

export default function DownloadButton({qrRef}){
    return(
        <button 
            type="button" 
            class="btn btn-primary" 
            onClick={() => downloadQRCode(qrRef)}
        >
            Télécharger mon QrCode (png)
        </button>
    );
}