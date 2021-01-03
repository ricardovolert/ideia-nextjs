import React from 'react';
import Head from 'next/head'
import Link from 'next/link'
import Nav from '../components/nav'

function Aprendizado(){
    return (
        <div>
            <Head>
                <title>My page title</title>
                <meta charSet="utf-8" />
                <meta property="og:title" content="My page title" key="title" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Nav />

            <div className="py-10">
                <h1 className="text-5xl text-center text-accent-1">
                    Meu aprendizado
                </h1>
            </div>

            <h2>Lições aprendidas até aqui de NextJS/NodeJS/React</h2>

            <ul>
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
            </ul>


        </div>
    )
}


export default Aprendizado