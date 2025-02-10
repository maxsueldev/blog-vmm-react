import Header from '../../../components/Header';
import '../style.scss';

export default function InglesNegocios() {
    return (
        <>
            <Header 
                background='../../../../public/assets/artigos/ingles-e-o-mundo-dos-negocios/intro-ingles-e-o-mundo-dos-negocios.jpg' 
                height='8rem'    
            />
            <section className='article'>
                <h1>O Inglês e o Mundo dos Negócios: Qual a relação?</h1>
                <hr />
                <div className='data-time'>
                    <span>19:09</span>
                    <span>12/06/2017</span>
                </div>
            </section>
        </>
    );
}