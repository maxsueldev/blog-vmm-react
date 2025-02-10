import perfilImage from '../../../public/assets/perfil.jpg';
import ArtigosPopulares from '../ArtigosPopulares';
import './style.scss';

export default function Sidebar() {
    return (
        <section className='content-lateral'>
            <div className='content__perfil'>
                <img className='content__perfil-img' src={perfilImage} alt='Foto perfil' />
                <p className='nome'>Lorem Ipsum</p>
                <p className="sobre">Escritora, empreendedora e criadora do projeto "Vamos mudar o mundo", tem como missão propagar a Educação Empreendedora através de palestras e produção de conteúdo.</p>
            </div>

            <ArtigosPopulares />
        </section>
    );
}