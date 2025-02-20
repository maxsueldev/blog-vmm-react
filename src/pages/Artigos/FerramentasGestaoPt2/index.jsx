import Header from '../../../components/Header';
import ArticleTitle from '../../../components/ArticleTitle';
import '../style.scss';

export default function FerramentasGestaoPt2() {
    return (
        <div>
            <Header
                background='artigos/ferramentas-para-gerir-e-analisar-seu-negocio-parte-2/intro-ferramentas-para-gerir-e-analisar-seu-negocio-parte-2.jpg'
                height='8rem'
            />
            <section className='article'>
                <ArticleTitle
                    title='As melhores ferramentas para gerir e analizar seu negócio! [PARTE 2]'
                    time='22:23'
                    date='10/05/2017'
                />

                <div className="article__content">
                    <p class="recuo">A importância de uma gestão empresarial de qualidade que tenha conhecimento sobre
                        todos os acontecimentos e novidades recorrentes em uma empresa não é novidade, mas quando chega
                        no dia a dia vemos a real dificuldade de gerir um negócio e estar a par de tudo que acontece em
                        todos os setores, por isso é tão necessário conhecermos ferramentas que possam nos ajudar a
                        sempre entender "como anda" nossa empresa e o que devemos fazer para alcançar nossos objetivos
                        como pessoa jurídica.</p>

                    <p class="recuo">Já falamos em um post anterior (se você não viu, <a
                        href="#" target="_blank"><strong>clique
                            aqui</strong></a> para lê-lo) sobre o <strong>Canvas</strong> que é umas das ferramentas
                        que mais ajudam no momento de começar um negócio, de <i>pivotar</i> sua ideia, ou até mesmo de
                        fazer simples atualizações naquilo que já está sendo oferecido. Nesse post vamos falar sobre a
                        <strong>Análise SWOT</strong>, que abrange um segmento menor que o <i>Canvas</i>, porém para um
                        nível mais avançado no negócio visto que sua veracidade é maior alcançada quando o negócio já
                        saiu do papel e não quando ainda é somente uma ideia.
                    </p>

                    <p class="recuo">Antes de falarmos o que é a Análise <strong>SWOT</strong>, vamos entender o que
                        significa esse nome. <strong>SWOT</strong> significa <i>Streghts</i> (Forças), <i>Weaknesses</i>
                        (Fraquezas), <i>Opportunities</i> (Oportunidades) e <i>Threats</i> (Ameaças) e é conhecido aqui
                        no Brasil como <strong>FOFA</strong>, ou seja, Forças, Oportunidades, Fraquezas e Ameaças,
                        representando nada mais que um diagrama que faz a análise desses quatro pilares fundamentais
                        para o crescimento de uma empresa.</p>

                    <h2 class="subtitulo">Conhecendo um pouco mais a ferramenta</h2>

                    <img src="https://blog-vmm-react.vercel.app/assets/artigos/ferramentas-para-gerir-e-analisar-seu-negocio-parte-2/swot-fofa.jpg"
                        alt="modelo-swot" />

                    <p class="recuo">O diagrama de análise <strong>SWOT</strong> é uma ferramenta administrativa
                        desenvolvida fora do Brasil que representa o diagnóstico completo do ambiente empresarial e é
                        muito utilizada em diversas universidades e empresas espalhadas pelo mundo. Seu sucesso se dá
                        pelo método de fácil utilização e pela facilidade de entendimento que o exercício exibe para a
                        equipe que com ele trabalha.</p>

                    <p class="citacao">“O estudo através deste esquema consiste na discussão e exploração dos quatro
                        objetivos centrais de uma companhia e respondendo a quatro perguntas: Quais são minhas forças,
                        Quais oportunidades posso aproveitar para meu negócio, Quais fraquezas meu produto ou serviço
                        apresenta e Quais são minhas ameaças. Nesse processo devem ser levadas em consideração questões
                        que podem ou não estar dentro do controle da corporação, por isso, são analisadas de forma
                        interna e externa.”</p>

                    <ul className='list'>
                        <p class="recuo"><strong>Análise Interna</strong></p>
                        <li>
                            <p class="recuo">Durante essa análise são respondidas duas das quatro perguntas (<i>as que
                                se referem as forças e as fraquezas</i>), visto que a réplica delas é de total
                                responsabilidade da firma e as mesmas não podem sofrer influências de um meio externo.
                            </p>
                            <ul className='list'>
                                <p class="recuo"><strong>1. Quais são minhas Forças?</strong></p>
                                <li>
                                    <p class="recuo">Quando analisamos as forças, devemos pensar em tudo aquilo que
                                        fortalece a comunicação <strong><i>“empresa x cliente”</i></strong> e que faz
                                        seu público-alvo adquirir seu produto ou serviço.</p>

                                    <p class="recuo">Exemplos de itens que representam as forças de uma empresa:</p>
                                    <ul className='list'>
                                        <li>Localização empresarial de qualidade</li>
                                        <li>Qualificação da equipe de trabalho</li>
                                        <li>Material didático atualizado e com novos recursos</li>
                                        <li>Relação existente entre a empresa e o cliente</li>
                                        <li>Melhores preços ou prazos</li>
                                        <li>Produtos de alta qualidade</li>
                                        <li>Produtos sustentáveis</li>
                                        <li>Relação da empresa com programas ambientais.</li>
                                    </ul>
                                </li>

                                <p class="recuo"><strong>2. Quais fraquezas meu produto/serviço apresenta?</strong></p>
                                <li>
                                    <p class="recuo">Assim como é necessário conhecermos nossas forças, precisamos
                                        entender quais fraquezas tem aquilo que ofereço ao meu público-alvo.</p>

                                    <p class="recuo">Como fraquezas, podemos entender:</p>
                                    <ul className='list'>
                                        <li>Matéria-prima escassa</li>
                                        <li>Produção altamente poluente</li>
                                        <li>Mão de obra de alto custo e difícil acesso</li>
                                        <li>Produtos que apresentam alto grau de poluição ao meio ambiente</li>
                                        <li>Desqualificação da equipe.</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <p class="recuo"><strong>Análise Externa</strong></p>
                        <li>
                            <p class="recuo">Nesta etapa, responderemos as outras duas questões que se referem às
                                oportunidades e às ameaças. Diferente da primeira análise, esta tem influência
                                totalmente externa, as quais nem sempre podem ser previstas pela empresa.</p>

                            <ul className='list'>
                                <p class="recuo"><strong>3. Quais oportunidades posso aproveitar para meu
                                    negócio?</strong></p>
                                <li>
                                    <p class="recuo">Ao analisarmos as oportunidades de uma instituição, devemos levar
                                        em consideração que nem sempre elas podem ser vistas anteriormente, fazendo-se
                                        preciso, portanto, que os responsáveis pela firma estejam sempre atentos aos
                                        ambientes que atuam para identificá-las.</p>

                                    <p class="recuo">Exemplos de oportunidades:</p>
                                    <ul className='list'>
                                        <li>Eventos do seu segmento que ocorram em sua cidade e sirvam como ponto de
                                            apoio para maior divulgação do seu negócio</li>
                                        <li>Leis que auxiliam no crescimento de sua empresa ou de alguma ação que sua
                                            empresa esteja realizando</li>
                                        <li>Acesso a novas tecnologias</li>
                                        <li>Cursos que surjam para auxiliar no crescimento profissional de sua equipe.
                                        </li>
                                    </ul>
                                </li>

                                <p class="recuo"><strong>4. Quais são minhas ameaças?</strong></p>
                                <li>
                                    <p class="recuo">Assim como as oportunidades, para analisar as ameaças que afetam,
                                        diretamente ou não uma empresa, é necessário estar atento ao meio de atuação do
                                        serviço.</p>

                                    <p class="recuo">Alguns exemplos que podem representar uma ameaça para uma empresa
                                        são:</p>
                                    <ul className='list'>
                                        <li>Leis que impeçam a venda de seus produtos ou serviços</li>
                                        <li>Pirataria de seus produtos</li>
                                        <li>Fenômenos naturais.</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>

                    <p class="recuo">Agora que você já está craque em <i>Canvas</i> e em <strong>SWOT</strong>, que tal
                        colocar essas ferramentas em prática e aplica-las em sua empresa? Não esqueça de assinar nossa
                        <i><a href="#" data-toggle="modal"
                            data-target="#modal_newslatter"><strong> Newslatter </strong></a></i> para receber mais
                        informações!
                    </p>
                </div>
            </section>
        </div>
    );
}