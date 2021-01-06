import React from 'react';
import Head from 'next/head'
import Link from 'next/link'
import Nav from '../components/nav'
import Image from 'next/image'

const Logo = () => (
    <>
        <div className="p-2 hidden md:inline-block">
             <Image src="/img/fast-banana.png" alt="Picture of the author" width={200} height={75} /> 
        </div>
        <div className="p-2 md:hidden">
            <Image src="/img/fast-banana.png" alt="Picture of the author" width={100} height={35} />
        </div>
    </>
)

const Menu = () => (
    <div className="p-2 flex items-center">
        <a className="menuTop" href="http://github.com/ricardovolert" target="_blank">
            Github
        </a>

        <a className="menuTop" href="http://github.com/ricardovolert" target="_blank">
            Page One
        </a>

        <a className="menuTop" href="http://github.com/ricardovolert" target="_blank">
            Contato
        </a>
    </div>
)

const Header = () => (
    <div className="p-2 container max-w-5xl m-auto flex justify-between items-center">
        <Logo />
        <Menu />
    </div>
)

const Banner = () => (
    <div className="container max-w-5xl m-auto flex-1 flex flex-col justify-center items-center sm:items-start text-center sm:text-left">
        <span className="text-gray">Este é apenas o exemplo de criação de um banner</span>
        <div className="text-4xl font-extrabold leading-snug">
            para chamar a <span className="text-red uppercase">atenção</span> em certos cuidados
        </div>
        <span className="text-gray">do desenvolvimento web em NextJS.</span>
    </div>
)



function Aprendizado(){
    return (
        <div className="container flex flex-col flex-1">
            <Head>
                <title>Controle de Aprendizado em NextJS</title>
                <meta charSet="utf-8" />
                <meta property="og:title" content="Controle de Aprendizado em JS" key="title" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <Nav />

            <Banner />

            <main>
            
                <h1 className="text-4xl text-yellow-400">
                    Título H1
                </h1>

                <h2 className="text-3xl text-red">
                    Título H2
                </h2>

                <h3 className="text-2xl text-blue-600 font-extrabold">
                    Título H3
                </h3>

                <p className="text-1xl">
                    Texto 1xl escrito em <code>pages/aprendizado.js</code>
                </p>

            
                <h1 className="text-4xl text-yellow-400">
                    Texto em Colunas
                </h1>

                <div className="grid grid-cols-3 gap-1">
                    <div className="p-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id laoreet diam, ac volutpat metus. 
                        Proin ut augue quis orci interdum.</div>
                    <div className="p-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id laoreet diam, ac volutpat metus. 
                        Proin ut augue quis orci interdum.</div>
                    <div className="p-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id laoreet diam, ac volutpat metus. 
                        Proin ut augue quis orci interdum.</div>
                </div>
            
                <h1 className="text-4xl text-yellow-400">
                    Resumo de conteúdos aleatórios sobre o NextJs
                </h1>


                <p>NextJS é um framework amplamente utilizado pela comunidade do React fornecendo componente para rotas, suporte typescript, bundling inteligente, server side renderind. Foi criado para construção de aplicações escalaveis. É uma ferramenta que consegue rodar código front-end no lado do servidor, sendo um OpenSource de licença MIT. O React é uma lib de JS mais utilizadas do momento, e os componentes do React manipulam o Dom, mas também pode renderizar os mesmos componentes pelo servidor e enviar diretamente para o navegador.</p>

                <p>Existem infitos frameworks mas esse é um dos que mais ganhou notabilidade atualmente. Criado para suprir as necessidades de desenvolvedores React. </p>


                <h1 className="text-4xl text-yellow-400">
                    Soluções do NextJS
                </h1>

                <ul className="list-none list-decimal">
                    <li>Sistema de roteamento baseado em páginas com suporte a rotas dinamicas</li>
                    <li>Pré renderização de paginas com suporte a SSG (Static Generation) o HTML é gerado na execução e reutilizado a cada Request ou então o SSR com renderização do lado do server</li>
                    <li>Divisão de código automatico e otimização do SEO</li>
                    <li>Roteamento do lado do cliente com Prefetching</li>
                    <li>Suporte integrado para CSS Sass ou qualquer lib CSS-in-JS</li>
                    <li>Ambiente em desenvolvimento com suporte Fast Refresh</li>
                    <li>API Routes para criação de API Endpoints com Serveless Functions </li>
                    <li>Totalmente extensível</li>
                </ul>


                <h1 className="text-4xl text-yellow-400">
                    Lições aprendidas até aqui
                </h1>

                <ul className="list-none md:list-disc">
                    <li>Eu ainda não sei o que é React e o que é NextJs no código, pois parecem ser as mesmas coisas escritas. Ainda é necessário estudar mais sobre.</li>
                    <li>As 'keys' que ficam dentro da tag Head protegem que o conteúdo não fique duplicado na renderização, mesmo que haja mais de um Head no documento.</li>
                    <li>Dentro da tag Links ainda existe a tag a do HTML pois isso ajuda na confecção de Estilos CSS.</li>
                    <li>O resultado de uma função é expresso dentro de uma tag de div.</li>
                    <li>O favicon.ico parece ser meio que automaticamente identificado na pasta public/ mesmo assim eu inseri uma tag meta sobre o icon dentro da tag Head</li>
                    <li>A seção de referencias da documentação do NextJS é muito rica de conteúdo. Para acessar <Link href="https://nextjs.org/docs/api-reference/next/head"><a target="_blank">clique aqui</a></Link></li>
                    <li>A target de links dentro da tag a.</li>
                    <li>Para criar uma página de erro basta um arquivo 404.js com o conteúdo dentro, sem muita configuração.</li>
                    <li>Eu ainda não sei adicionar um CSS direito aqui, mas já sei que vou usar o Tailwind onde a instalação é disponibilizada de duas formas neste <Link href="https://tailwindcss.com/docs/guides/nextjs"><a>link</a></Link></li>
                    <li>A vantagem do SSR do NextJS faz com que o SEO não seja ignorado pelos motores de busca</li>
                    <li>O bootstrap tem várias classes e elas tem varias instruções/propriedades (classes/blocos) e o tailwind tem uma classe para cada propriedade, assim nada é fixo mas é responsivo de forma simples e customizavel.</li>
                    <li>Existem diversos repositórios de tailwind como: <Link href="https://tailwindcomponents.com/"><a>aqui</a></Link> e <Link href="https://github.com/vercel/next.js/tree/canary/examples"><a>aqui</a></Link> e <Link href="https://github.com/creativetimofficial/notus-nextjs"><a>aqui</a></Link> por exemplo.</li>
                    <li>Estou inserindo em <Link href="/admin"><a>Admin</a></Link> vários recursos descritos na documentação com intenção de entender a lógica para elaborar template. Para isso estou estudando o Core Concepts <Link href="https://tailwindcss.com/docs/utility-first"><a>Core Concepts</a></Link></li>
                    <li>Antes de corrigir um erro de CSS verifique o arquivo <code>tailwind.js</code></li>
                    <li>Conforme pode ser analisado nos códigos das páginas que usam class no lugar de className, veremos erro no console com o DOM sugerindo que a propriedade class seja className</li>
                    <li><Link href="https://www.devsamples.com/javascript/next/nextjs-adding-a-script-tag">DevSamples</Link> foi uma ótima referência para saber como inserir uma tag script diretamente no NextJS, mas agora precisa entender e verificar como retrair um site pela resolução aumentar.</li>
                    <li>Existe com base nessa ideia acima, um erro do uso de javascript por script apresentado em <Link href="/auth/login"><a>login</a></Link></li>
                    <li>Existe uma tentativa de elaborar um layout de form login <Link href="/tailwind"><a>aqui</a></Link></li>
                    <li>Calculadora e funções em JS são apresentadas <Link href="/calculator"><a>aqui</a></Link></li>
                </ul>

                <h1 className="text-4xl text-yellow-400">
                    O que falta desenvolver ainda
                </h1>

                <ul className="list-none list-decimal">
                    <li>Entender melhor como minificar arquivos - conforme está nos ultimos minutos desta <Link href="https://www.youtube.com/watch?v=1qH3wAtX4So&t=14s&ab_channel=RicardoSanches"><a>aula</a></Link></li>
                    <li>Desenvolver Forms</li>
                    <li>Estudar Background com imagens</li>
                    <li>Integrar Forms com DB MySQL e DB Mongodb</li>
                    <li>Verificar Meios de realizar autenticação</li>
                    <li>Verificar meios de criar buscador</li>
                    <li>Verificar meios de criar page/blog/post no estilo noticia para consulta</li>
                    <li>Procurar meios de criar SEO e optimizações de páginas e consultas</li>
                </ul>


            </main>
        </div>
    )
}


export default Aprendizado