import Header from '../../../components/Header';
import '../style.scss';

export default function Empreendedorismo() {
    return (
        <>
            <Header 
                background='../../../../public/assets/artigos/por-que-devo-ensinar-empreendedorismo-em-minha-escola/intro-por-que-devo-ensinar-empreendedorismo-em-minha-escola.jpg' 
                height='8rem'    
            />
            <section className='article'>
                <h1>Por que devo ensinar Empreendedorismo em minha escola?</h1>
                <hr />
                <div className='data-time'>
                    <span>19:25</span>
                    <span>19/06/2017</span>
                </div>
            </section>
        </>
    );
}