import './style.scss';

export default function SobreAutora() {
    return (
        <div className="sobre">
            <div className="sobre__foto">
                <img src="https://blog-vmm-react.vercel.app/assets/perfil.jpg" alt="Lorem Ipsum" />
            </div>
            <div className="sobre__descricao">
                <h1>Sobre a autora</h1>
                <p>Escritora, empreendedora e criadora do projeto &quot;Vamos mudar o mundo&quot;, tem como missão
                    propagar a Educação Empreendedora através de palestras e produção de conteúdo.</p>
            </div>
        </div>
    );
}