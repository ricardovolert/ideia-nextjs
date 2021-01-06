import React from 'react';
import Link from 'next/link'

const links = [
    { href: 'https://github.com/ricardovolert/', label: 'Github'},
    { href: 'https://nextjs.org/docs', label: 'NextJS Docs'},
];


function Navbar(props) {
    return (
        <>
        <div class="container mx-auto bg-purple-300 p-5">
            <nav class="flex-row md:justify-between">
                <div class="flex flex-row justify-between">
                <a href="#">Logo</a>

                <p id="hamburgerbtn" class="md:hidden bg-purple-800">
                    menu
                </p>
                </div>
            
                <ul class="hidden md:flex md:flex-row" id="mobileMenu">
                    <li class="pr-5"><a>Services </a></li>
                    <li class="pr-5"><a>Porfolio</a></li>
                    <li class="pr-5"><a>About</a></li>
                    <li><a>Contact</a></li>
                </ul>
            </nav>
        </div>

        <script dangerouslySetInnerHTML={{ __html: `
        let hamburger = document.getElementById('hamburgerbtn');
        let mobileMenu = document.getElementById('mobileMenu');

        hamburger.addEventListener('click', function(){
            mobileMenu.classList.toggle('active');
        });
        `}} />

        <style global jsx>{`
            .active{
                display: block;
            }
        `}</style>
        </>
    );
}


export default Navbar