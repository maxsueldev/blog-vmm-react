export default function Contato() {
    return (
        <section className="content">
            <h1 class="titulo">Contato</h1>
            <div class="conteudo">
                <p>Se interessou no projeto, quer tirar alguma dúvida ou tem alguma crítica ou sugestão? Então entre
                    em contato que em breve falaremos com você!</p>

                <form id="form_blog" action="./enviar.php" method="post" name="form" class="formphp_blog form">
                    <label htmlFor="nome">Nome:</label>
                    <input type="text" id="nome" name="nome" required />
                    <label htmlFor="email">E-mail:</label>
                    <input type="email" id="email" name="email" required />
                    <label htmlFor="assunto">Assunto:</label>
                    <input type="text" id="assunto" name="assunto" />

                    <label htmlFor="mensagem">Mensagem:</label>
                    <textarea name="mensagem" id="mensagem" required></textarea>
                    
                    <button id="enviar_blog" name="enviar" type="submit">Enviar</button>
                </form>
            </div>
        </section >
    );
}