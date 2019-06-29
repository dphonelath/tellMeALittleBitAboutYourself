import Layout from "../components/Layout";


const Index = (props) => {
    return(
        <Layout>
            <div>
                <h1>Tell Me A Little Bit About Yourself {props.name}</h1>
            </div>
            <div> 
                Hey Hey!
            </div>
        </Layout>
    )
}

export default Index