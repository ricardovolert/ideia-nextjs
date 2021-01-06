import React from 'react';
import Head from 'next/head'

function TestePage(){
    return (
        <div>
            <Head>
                <title>My page title</title>
                <meta charSet="utf-8" />
                <meta property="og:title" content="My page title" key="title" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="bg-indigo-100 text-black">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="md:min-h-screen md:flex md:items-center p-8 sm:p-12 bg-blue-400">
                            <div className="flex-grow">
                                <h1 className="text-white text-center text-2xl sm:text-5xl mb-2">
                                    Nome do Sistema
                                </h1>
                                <p className="text-center text-blue-200 md:text-lg">
                                    faça seu login
                                </p>
                                <p className="text-center text-white md:text-lg font-extrabold">
                                    v. 1.0.0
                                </p>
                            </div>            
                    </div>


                    <div className="md:min-h-screen md:flex md:items-center md:p-24 lg:p-48">
                        <div className="py-8 px-8 max-h-sm mx-auto bg-white md:rounded-xl shadow-md space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
                            <img className="block mx-auto h-24 rounded-full sm:mx-0 sm:flex-shrink-0" src="/img/woman-face.jpg" alt="Woman's Face"></img>
                            <div className="text-center space-y-2 sm:text-left">
                                <div className="space-y-0.5">
                                    <p className="text-lg text-black font-semibold">
                                        Seu Nome de Usuário
                                    </p>
                                    <p className="text-gray-500 font-medium">
                                        Seu cargo
                                    </p>
                                </div>
                                <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Não é Fulano?</button>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

        </div>
    )
}


export default TestePage