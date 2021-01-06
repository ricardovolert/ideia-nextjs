import React from 'react';
import Link from 'next/link'

const links = [
    { href: 'https://github.com/ricardovolert/', label: 'Github'},
    { href: 'https://nextjs.org/docs', label: 'NextJS Docs'},
];


function Navbar(props) {
    return (
        <nav>
            <ul className="flex justify-between items-center p-8">
                <li>
                    <Link href="/">
                        <a className="text-blue-500 no-underline">Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/sobre">
                        <a className="text-blue-500 no-underline">Sobre</a>
                    </Link>
                </li>
                <li>
                    <Link href="/admin">
                        <a className="text-blue-500 no-underline">Admin Dash</a>
                    </Link>
                </li>
                <li>
                    <Link href="/tailwind">
                        <a className="text-blue-500 no-underline">TailWind</a>
                    </Link>
                </li>
                <li>
                    <Link href="/calculator">
                        <a className="text-blue-500 no-underline">Calculator</a>
                    </Link>
                </li>
                <li>
                    <Link href="/auth/login">
                        <a className="text-blue-500 no-underline">Login</a>
                    </Link>
                </li>
                <li>
                    <Link href="/auth/register">
                        <a className="text-blue-500 no-underline">Register</a>
                    </Link>
                </li>
                <li>
                    <Link href="/aprendizado">
                        <a className="text-blue-500 no-underline">Aprendizado</a>
                    </Link>
                </li>
                <li>
                    <Link href="/contato">
                        <a className="text-blue-500 no-underline">Contato</a>
                    </Link>
                </li>
                <ul className="flex justify-between items-center space-x-4">
                    {links.map(( {href, label }) => (
                        <li key={`${href}${label}`}>
                            <a href={href} className="btn-blue no-underline">
                                {label}
                            </a>
                        </li>
                    ))}
                </ul>
            </ul>
        </nav>
    );
}


export default Navbar