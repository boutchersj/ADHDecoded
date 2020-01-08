import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import Head from '../components/Head'

const AboutPage = () => {
    return (
        <Layout>
            <Head title="About" />
            <h2>About</h2>
            <p>My name is Steven and I am an aspiring web developer and ADHD self-help blogger.</p>
            <Link to='/contact'>Contact</Link>
        </Layout>
    )
}

export default AboutPage