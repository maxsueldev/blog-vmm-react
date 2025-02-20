import Header from '../../../components/Header';
import ArticleTitle from '../../../components/ArticleTitle';
import '../style.scss';

export default function FerramentasGestaoPt1() {
    return (
        <div>
            <Header
                background='artigos/ferramentas-para-gerir-e-analisar-seu-negocio-parte-1/intro-ferramentas-para-gerir-e-analisar-seu-negocio-parte-1.jpg'
                height='8rem'
            />
            <section className='article'>
                <ArticleTitle
                    title='As melhores ferramentas para gerir e analizar seu negócio! [PARTE 1]'
                    time='16:00'
                    date='02/05/2017'
                />

                <div className='article__content'>
                    <p className="recuo">Gerir o próprio negócio nunca foi tarefa fácil e ao contrário do que se parece, não
                        tem experiência do mundo que a torne melhor. É sempre necessário estar planejando, analisando,
                        se adaptando as novidades do mercado, criando, pivotando e trazendo constantes inovações para
                        fidelizar clientes antigos ou conquistar novos, e não pensem que esse é todo o trabalho de um
                        empreendedor, porque não falamos nem de metade ainda.</p>

                    <p className="recuo">Pensando nisso e imaginando formas de como ajudar tanto no processo de entendimento
                        de um negócio já existente como na criação de um novo, fiz uma lista de ferramentas de gestão
                        que nos ajudam tanto a entender o funcionamento de uma empresa, como a entender o que pode ser
                        feito para dar aquela alavancada que falta para tudo entrar nos eixos!</p>

                    <p className="recuo">Vamos nesse primeiro momento entender um pouco mais sobre o Canvas, uma das
                        ferramentas mais utilizadas atualmente!</p>

                    <h2 className="subtitulo">1º. Business Model Canvas</h2>

                    <img src="https://blog-vmm-react.vercel.app/assets/artigos/ferramentas-para-gerir-e-analisar-seu-negocio-parte-1/canvas.png" />

                    <p className="recuo">O <i>Canvas</i> é uma ferramenta de gerenciamento estratégico que funciona como
                        "<i>resumão</i>" da maior parte das informações que devem constar em um documento como o Plano
                        de Negócios, por exemplo, e é utilizado tanto na criação de novos negócios, como também no
                        processo de recriação e inovação de uma empresa. Seus maiores diferenciais são a forma
                        sistemática como todas as informações são organizadas, já que o mesmo é preenchido como um mapa
                        visual, ou seja, tudo está ali, basta você ver; e o poder de ter um processo de cocriação
                        (<i>criação colaborativa</i>) que faz com que seja envolvido em seu preenchimento todos os
                        interessados no projeto.</p>

                    <p className="recuo">Ele é formado pelos principais itens constituintes de uma empresa e ao contrário de
                        documentos formais não deve ser preenchido a partir do início, mas sim pelo meio. Calma, não é
                        loucura, vamos a explicação!</p>

                    <p className="recuo">A ferramenta propõe para o empreendedor a resposta de quatro perguntas que
                        funcionam como pilares essenciais de uma empresa: <strong>"Como, O que, Para quem e
                            Quanto"</strong>, fazendo com que a partir delas sejam analisados nove pontos que dizem
                        muito a respeito das decisões que serão tomadas futuramente, podendo ser alteradas quantas vezes
                        forem necessárias independente de qual estágio de funcionamento a instituição esteja.</p>

                    <p className="recuo">A primeira parte do quadro a ser respondida é a que abrange a oferta do negócio ou
                        “<i>O que</i>” será oferecido ao cliente, a está parte damos o nome de <strong>Proposta de
                            Valor</strong>. É nesse momento que será deixado claro o que de valor seu produto ou serviço
                        irá oferecer ao seu público alvo e quais são os benefícios que seu negócio oferecerá.</p>

                    <p className="recuo">A segunda parte a ser preenchida é a que se refere aos clientes, também chamada de
                        "<i>Para quem</i>" e que é constituída por três itens: Segmentos de clientes, Canais e
                        Relacionamentos.</p>

                    <p className="recuo">Em <strong>Segmentos de Clientes</strong> é necessário deixarmos claro qual é o
                        público alvo do seu negócio naquele momento. É interessante lembrarmos que o público alvo pode
                        ser alterado de acordo com a atualização e as mudanças aplicadas na empresa com o decorrer do
                        tempo, por isso, sempre que falarmos dele precisamos deixar bem delimitado a classe de clientes
                        que interessam a sua empresa. <i>Generalizar nesse caso nunca é uma boa opção!</i></p>

                    <p className="recuo">Em <strong>Canais</strong>, trabalharemos quais canais de comunicação estreitarão a
                        relação Cliente x Empresa. No momento da escolha de quais canais utilizar, é necessário pensar
                        em questões como: Onde seu público alvo está? Vale a pena investir em comunicação através da
                        internet ou é melhor investir em propagandas televisivas, por exemplo? É nesse ponto que também
                        devem ser analisadas as estratégias de <i>marketing</i> que estão sendo utilizadas por seu
                        negócio!</p>

                    <p className="recuo">Em <strong>Relacionamentos</strong>, será analisada a relação entre o cliente com
                        sua empresa. A esse tipo de processo, dá-se o nome de <i>Customer Relationship Management</i>
                        (CRM, ou em português Gestão de Relacionamento com o Cliente) que é estratégia de negócios que
                        você utilizará para manter seu relacionamento com seu público-alvo.</p>

                    <p className="recuo">A terceira parte do mapa visual é representada pela sessão de Finanças, ou do que
                        chamamos de "<i>Quanto</i>" e possui dois pontos a serem respondidos: "Qual sua fonte de receita
                        e Qual sua estrutura de custos", porém, nesse momento é interessante ser respondido somente
                        sobre as Fontes de Receita, visto que para entender quanto será gasto no projeto será antes
                        necessário analisar como será implantada sua ideia no mercado.</p>

                    <p className="recuo">Em <strong>Fontes de Receitas</strong>, será analisada quais as melhores formas de
                        monetização para que não haja prejuízo na venda do produto ou serviço, assim como para que ele
                        possua um preço de acordo com o que o mercado já oferece.</p>

                    <p className="recuo">Após respondermos a primeira parte da sessão "<i>Quanto</i>", começaremos a
                        entender "<i>Como</i>" o projeto será retirado do papel. A sessão “<i>Como</i>” conta com três
                        pontos: Atividades-chave, Recursos-chave e Parceiros-chave.</p>

                    <p className="recuo">As <strong>Atividades-chave</strong> representam a parte do “<i>BOTA PRA
                        FAZER</i>”, visto que é através das decisões tomadas nela que veremos os resultados obtidos
                        na entrega da Proposta de Valor.</p>

                    <p className="recuo">Em <strong>Recursos-chave</strong> será descrito todos os recursos que serão
                        necessários para que seja gerado o valor apresentado ao seu cliente. E os
                        <strong>Parceiros-chave</strong> delimitam quais pessoas, empresas, ONGs ou Institutos podem
                        fazer parte da sua rede de parceiros, ajudando assim no crescimento do seu negócio.
                    </p>

                    <p className="recuo">No fim desta etapa e já tendo definido informações como Recursos-chave, pode-se por
                        fim definir a <strong>Estrutura de custo</strong> do seu projeto, parte final da etapa
                        “<i>Quanto</i>”, que é a descrição de tudo que será utilizado para a realização da proposta, mas
                        que entrará no projeto como investimento, ou seja, como custos financeiros. Nessa etapa é
                        necessário analisar custo com mão de obra, matéria prima, pesquisa, <i>marketing</i> e todos os
                        outros investimentos!</p>

                    <p className="recuo">Gostou do Canvas e quer começar a aplicar na sua empresa? Faça aqui o <a
                        href="#"
                        download="canvas"><strong>Download</strong></a> de um modelo prontinho para você usar e
                        tente fazer com sua equipe. Uma dica valiosa é utilizar post-its para o preenchimento dele,
                        assim quando alguma coisa mudar você pode simplesmente trocar o post-it e não faz nenhuma
                        <i> baguncinha </i> em seu <i>Plan</i>! Baixe também um <a
                            href="#"
                            download="infografico"><strong>Infográfico</strong></a> com o resumo do que é cada detalhe
                        do Canvas!
                    </p>

                    <p className="recuo">Lembre-se de compartilhar esse artigo com seus amigos nas suas redes sociais e de
                        assinar nossa <i><a href="#" data-toggle="modal"
                            data-target="#modal_newslatter"><strong>Newslatter</strong></a></i> para receber mais
                        informações!</p>
                </div>
            </section>
        </div>
    );
}