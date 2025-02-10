import { Link } from 'react-router-dom';
import './style.scss';

export default function CardArtigo({ artigo }) {
    return (
        <div className='artigo'>
            <Link to={`./artigos/${artigo.linkName}`} >
                <h1 className="titulo-artigo">{artigo.title}</h1>
            </Link>

            <div className="img-artigo">
                <Link to={`./artigos/${artigo.linkName}`}>
                    <img className='img-thumb-artigo'
                        src={artigo.imageUrl}
                        alt={artigo.title} />
                </Link>
            </div>

            <p>{artigo.description}</p>

            <div className="continue">
                <Link to={`./artigos/${artigo.linkName}.html`}>Continue lendo</Link>
            </div>
        </div>
    );
}