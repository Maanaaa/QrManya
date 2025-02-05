import DownloadButton from '../qrCode/Download.jsx'
export default function Form(){
    return(
        <div className="inputForm">
            <form action="#">
                <div class="form-group">
                    <label for="message"><h4>Insérer un texte ou un lien ici</h4></label>
                    <input type="text" class="form-control" id="message" placeholder="https://www.votreSiteWeb.fr" />
                    <DownloadButton/>
                </div>
            </form>
            
        </div>

    );
}