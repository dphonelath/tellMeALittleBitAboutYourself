import Link from 'next/link';

const Navbar= () => {
    return (
        <nav className="navBar">
            <Link href="/">
                <a>Home</a>
            </Link>
            <Link href="/about">
                <a>About</a>
            </Link>
            <Link href="/contact">
                <a>Poems</a>
            </Link>
            <style JSX>{`
                .navBar{
                    background-color: #46C1E7;
                    display: block;
                }

                a{
                    padding: 2rem;
                    float: left;  
                    background-color: #46C1E7;
                    text-decoration: none;
                    margin: 0;
                }
            `}</style>
        </nav>
    );
}

export default Navbar;