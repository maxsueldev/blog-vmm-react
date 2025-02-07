import './style.scss';

export default function Contato() {
    return (
        <section className="content">
            <h1 className="content__title">Contato</h1>
            <div class="conteudo">
                <p>Se interessou no projeto, quer tirar alguma dúvida ou tem alguma crítica ou sugestão? Então entre
                    em contato que em breve falaremos com você!</p>

                <form id="form_blog" method="post" name="form">
                    <label htmlFor="nome">Nome:</label>
                    <input type="text" id="nome" name="nome" required />
                    <label htmlFor="email">E-mail:</label>
                    <input type="email" id="email" name="email" required />
                    <label htmlFor="assunto">Assunto:</label>
                    <input type="text" id="assunto" name="assunto" />

                    <label htmlFor="mensagem">Mensagem:</label>
                    <textarea name="mensagem" id="mensagem" required></textarea>

                    <button id="enviar_blog" class="enviar_blog" name="enviar" type="submit">Enviar</button>
                </form>
            </div>
        </section >
    );
}