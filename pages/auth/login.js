import React from 'react';
import Head from 'next/head'
import Link from 'next/link'
import Nav from '../../components/nav'
import NewNav from '../../components/newnav'

function LoginPage(){
    return (
        <div>
            <Head>
                <title>My page title</title>
                <meta charSet="utf-8" />
                <meta property="og:title" content="My page title" key="title" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <NewNav />

            <Nav />

            <div className="py-10">
                <h1 className="text-5xl text-center text-accent-1">
                    Login - Essa página é um erro por conta do NewNav
                </h1>
            </div>

            <p>Esta página é para verificar erros que existem ao inserir um script como 
                tradicionalmente seria no html justamente por algo de carregar uma página por um clique e por 
                reload dela são diferentes a sua render pelo server.</p>

            <p>
                <Link href="/">
                    <a>voltar para a Home</a>
                </Link>
            </p>

        </div>    
    )
}


export default LoginPage