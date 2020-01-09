import React from 'react'
import Layout from '../components/Layout'
import Head from '../components/Head'

const Portfolio = () => {
    return (
        <Layout>
            <Head title="Portfolio" />
            <h2>Portfolio</h2>
            <p>This is where my new portfolio will live.</p>
            <a target='_blank' href='https://boutchersj.github.io'>Old portfolio</a>
        </Layout>
    )
}

export default Portfolio