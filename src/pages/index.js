import React from "react"
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import Head from '../components/Head'

const IndexPage = () => {

    return (
        <Layout>
            <Head title="Home" />
            <main>
                <h1>Hello.</h1>
                <h2>I'm Steven, a front-end developer living in small-town Wisconsin.</h2>
            </main>
        </Layout>
    )
}

export default IndexPage