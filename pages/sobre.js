import Link from 'next/link';


function Sobre(){
    return (
        <div>
            <h2>Sobre</h2>

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
        </div>
    )
}

export default Sobre