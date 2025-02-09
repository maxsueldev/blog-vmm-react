import { Link } from 'react-router-dom';
import './style.scss';

export default function CardArtigo({ artigo }) {
    console.log(artigo.imageUrl);

    return (
        <div className='artigo'>
            <Link to={`./artigos/${artigo.linkName}.html`} >
                <h1 className="titulo-artigo">{artigo.title}</h1>
            </Link>

            <div className="img-artigo">
                <Link to={`./artigos/${artigo.linkName}.html`}>
                    {/* <img className='img-thumb-artigo'
                        src={artigo.imageUrl}
                        alt={artigo.title} /> */}
                        <p>Testando</p>
                </Link>
            </div>

            <p>{artigo.description}</p>

            <div className="continue">
                <Link to={`./artigos/${artigo.linkName}.html`}>Continue lendo</Link>
            </div>
        </div>
    );
}