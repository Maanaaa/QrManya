import { useState } from 'react';
import DownloadButton from '../qrCode/Buttons.jsx'
import DisplayQrCode from '../qrCode/QrCodeDisplay.jsx';
import { useRef } from 'react';

export default function Form(){
    const [qrValue, setQrValue] = useState(''); // State to store the field value
    const qrRef = useRef(); // Access to Dom element, reference for the QRCode's component 

    const onChange = (event) =>{
        setQrValue(event.target.value);
    };

    return(
        <div className="inputForm">
            <form action="#">
                <div class="form-group">
                    <label for="message"><h4>Insérer un texte ou un lien ici</h4></label>
                    <input type="text" 
                    value={qrValue} 
                    className="form-control border border-primary" 
                    id="message" 
                    placeholder="https://www.votreSiteWeb.fr" 
                    onChange={onChange} 
                />
                    <DisplayQrCode qrValue={qrValue} qrRef={qrRef} />
                    <DownloadButton qrRef={qrRef} />
                </div>
            </form>
        </div>
    );
}