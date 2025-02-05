export default function DisplayQrCode(){
    const $qrCode = "https://png.pngtree.com/png-vector/20190724/ourmid/pngtree-qr-code-free-png-png-image_1589443.jpg"
    return(
        <div className="displayQrCode border border-primary">
            <img src={$qrCode} alt=""/>
        </div>
    );
}