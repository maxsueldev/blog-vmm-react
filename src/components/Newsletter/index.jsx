import './style.scss';

export default function Newsletter() {
    return (
        <div className="newsletter">
            <p>Quer ficar por dentro das novidades? Deixe seu email!</p>
            <form className='newsletter__form'>
                <input type="email" />
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}