import Head from 'next/head';

function IndexPage() {
    return (
        <div>
            <Head>
                <title>Tell Me a Little Bit About Yourself</title>
                <meta 
                name="viewport" 
                content="initial-scale=1.0, width=device-width" 
                key= "viewport"
                />
            </Head>
            <Head>
                <meta
                name="viewport"
                content="initial-scale=1.2, width=device-width"
                key="viewport"
                />
            </Head>
            <p>Tell Me A Little Bit About Yourself</p>
        </div>
    );
}

export default IndexPage;