import React from 'react';
import Head from 'next/head'
import Link from 'next/link'
import Nav from '../../components/nav'
import Image from 'next/image'


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

            <div className="text-center">
                Esta página é uma tentativa de utilizar os recursos descritos na documentação com intenção de elaborar um template. Para isso estou estudando o Core Concepts <Link href="https://tailwindcss.com/docs/utility-first"><a>Core Concepts</a></Link>
            </div>


            <div className="text-center">
                <Image src="/img/fast-banana.png" alt="Picture of the author" width={500} height={200} />
            </div>

            <p>
                <Link href="/">
                    <a>voltar para a Home</a>
                </Link>
            </p>


            <div className="text-center">
                <p>Mensagem</p> 

                <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
                    <div className="flex-shrink-0">
                        <img className="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo"></img>
                    </div>
                    <div>
                        <div className="text-xl font-medium text-black">ChitChat</div>
                        <p className="text-gray-500">Você tem uma nova mensagem!</p>
                    </div>
                </div>
            </div>


            <div className="text-center">
                <p>Card</p> 


                <div className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
                    <img className="block mx-auto h-24 rounded-full sm:mx-0 sm:flex-shrink-0" src="/img/woman-face.jpg" alt="Woman's Face"></img>
                    <div className="text-center space-y-2 sm:text-left">
                        <div className="space-y-0.5">
                            <p className="text-lg text-black font-semibold">
                                Erin Lindford
                            </p>
                            <p className="text-gray-500 font-medium">
                                Product Engineer
                            </p>
                        </div>
                        <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Message</button>
                    </div>
                </div>
            </div>



            <div className="text-center">
                <p>Button</p>

                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Click me
                </button>
            </div>

            <div className="">
                <div className="text-center">
                    <p>Post Resume</p>
                </div>

                <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                    <div className="md:flex">
                        <div className="md:flex-shrink-0">
                            <img className="h-48 w-full object-cover md:w-48" src="/img/woman-face.jpg" alt="Man looking at item at a store"></img>
                        </div>
                        <div className="p-8">
                            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Case study</div>
                            <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Finding customers for your new business</a>
                            <p className="mt-2 text-gray-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
                        </div>
                    </div>
                </div>

            </div>



            <div className="text-center sm:text-left">Forma adequada de alinhamento de texto</div>

            <div className="text-center">
                <form>
                    <input className="border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent hover:shadow-lg ..."></input>
                    <button className="bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 text-white font-bold py-2 px-4 rounded ...">
                        Sign up
                    </button>
                </form>
            </div>

            <div className="text-center">
                <button className="bg-red-500 hover:bg-red-700  text-white font-bold py-2 px-4 rounded">
                    Hover me
                </button>
            </div>

            <div className="text-center">
                <div class="group border-indigo-500 hover:bg-white hover:shadow-lg hover:border-transparent ...">
                    <p class="text-indigo-600 group-hover:text-gray-900 ...">New Project</p>
                    <p class="text-indigo-500 group-hover:text-gray-500 ...">Create a new project from a variety of starting templates.</p>
                </div>
            </div>


            <div className="text-center">
                <button class="group bg-yellow-500 focus:bg-yellow-600 ...">
                    <svg class="text-white group-focus:text-yellow-300 ..."></svg>
                    Bookmark
                </button>
            </div>




            <div className="text-center">
                <form>
                <div class="text-gray-400 focus-within:text-gray-600 ...">
                    <div class="...">
                    <svg fill="currentColor"></svg>
                    </div>
                    <input class="focus:ring-2 focus:ring-gray-300 ..."></input>
                </div>
                </form>
            </div>



            <div className="text-center">

                <button class="focus:ring-2 focus:ring-red-500 ...">
                    Ring on focus
                </button>
                <button class="focus-visible:ring-2 focus-visible:ring-rose-500 ...">
                    Ring on focus-visible
                </button>
            </div>


            <div className="text-center">
                <button class="transform hover:scale-110 motion-reduce:transform-none ...">
                    Hover me
                </button>
            </div>



            <div className="text-center">
                <button class="disabled:opacity-50 ...">
                    Submit
                </button>
                <button class="disabled:opacity-50 ..." disabled>
                    Submit
                </button>
            </div>



            <div className="text-center">
                <a href="#" class="text-blue-600 visited:text-purple-600 ...">Link</a>
            </div>




            <div className="text-center">
                <input type="checkbox" class="appearance-none checked:bg-blue-600 checked:border-transparent ..."></input>
            </div>


        </div>
    )
}


export default AdminIndex