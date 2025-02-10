import Header from '../../../components/Header';
import '../style.scss';

export default function PrimeiroNegocio() {
    return (
        <>
            <Header 
                background='../../../../public/assets/artigos/como-abrir-meu-primeiro-negocio/intro-como-abrir-meu-primeiro-negocio.jpg' 
                height='8rem'    
            />
            <section className='article'>
                <h1>Como abrir meu primeiro negócio: 6 dicas que podem te ajudar!</h1>
                <hr />
                <div className='data-time'>
                    <span>10:40</span>
                    <span>02/05/2017</span>
                </div>
            </section>
        </>
    );
}