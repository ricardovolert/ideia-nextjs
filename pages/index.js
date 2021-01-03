import Link from 'next/link';

function Home(){
    return (
        <div>
            <h2>Home Page</h2>

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



export default Home