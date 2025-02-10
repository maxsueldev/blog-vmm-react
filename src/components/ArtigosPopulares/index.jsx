import { useContext } from 'react';
import { AppContext } from '../../context';
import { Link } from 'react-router-dom';
import './style.scss';

export default function ArtigosPopulares() {
    const { artigos } = useContext(AppContext);
    
    return (
        <div className='content__artigos-populares'>
            <div className="top-artigos-populares">
                <h2>Artigos populares</h2>
            </div>
            <ul className="content__lista-artigos-populares">
                {artigos.slice(0, 3).map(artigo => (
                    <li key={artigo.id}><Link to={`/artigos/${artigo.linkName}`}>{artigo.title}</Link></li>
                ))}
            </ul>
        </div>
    );
}