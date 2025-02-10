import Header from '../../../components/Header';
import '../style.scss';

export default function FerramentasGestaoPt1() {
    return (
        <>
            <Header 
                background='../../../../public/assets/artigos/ferramentas-para-gerir-e-analisar-seu-negocio-parte-1/intro-ferramentas-para-gerir-e-analisar-seu-negocio-parte-1.jpg' 
                height='8rem'    
            />
            <section className='article'>
                <h1>As melhores ferramentas para gerir e analizar seu negócio! [PARTE 1]</h1>
                <hr />
                <div className='data-time'>
                    <span>16:00</span>
                    <span>02/05/2017</span>
                </div>
            </section>
        </>
    );
}