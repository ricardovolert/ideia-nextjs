import React from 'react';
import Head from 'next/head'
import Link from 'next/link'
import Nav from '../../components/nav'

function AdminIndex(){
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
                    Admin
                </h1>
            </div>

            <p>
                <Link href="/">
                    <a>voltar para a Home</a>
                </Link>
            </p>


        </div>
    )
}


export default AdminIndex