import Head from "next/head";
import Navbar from "./Navbar";


const Layout = (props) => {
    return (
        <div>
            <Head>
                <title>Tell Me a Little Bit About Yourself</title>
            </Head>
            <Navbar/>
            <div className="container">
                {props.children}
            </div>
        </div>
    )
}

export default Layout