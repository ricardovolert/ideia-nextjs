import { useState } from 'react';

import Link from 'next/link';


function Contato(){
    return (
        <div>
            <h2>Contato</h2>

            <p>
                <Link href="/">
                    <a>Home</a>
                </Link>
            </p>

            <p>
                <Link href="/sobre">
                    <a>Sobre</a>
                </Link>
            </p>

            <p>
                <Link href="/contato">
                    <a>Contato</a>
                </Link>
            </p>

            <Contador />
        </div>
    )
}

function Contador(){
    const [contador, setContador] = useState(1);

    function adicionarContador(){
        setContador(contador + 1);
    }
    return (
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Adicionar</button>
        </div>
    )
}


export default Contato