import { useContext } from 'react';
import { AppContext } from '../../context';
import perfilImage from '../../../public/assets/perfil.jpg';
import './style.scss';
import { Link } from 'react-router-dom';

export default function Sidebar() {
    const { artigos } = useContext(AppContext);    
    
    return (
        <section className='content-lateral'>
            <div className='content__perfil'>
                <img className='content__perfil-img' src={perfilImage} alt='Foto perfil' />
                <p className='nome'>Lorem Ipsum</p>
                <p className="sobre">Escritora, empreendedora e criadora do projeto "Vamos mudar o mundo", tem como missão propagar a Educação Empreendedora através de palestras e produção de conteúdo.</p>
            </div>

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
        </section>
    );
}