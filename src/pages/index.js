import React from "react"
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import Head from '../components/Head'

const IndexPage = () => {

    return (
        <Layout>
            <Head title="Home" />
            <main>
                <h2>Hello, I'm Steven Boutcher. Welcome to my site!</h2>
                <p>Here you will find:</p>
                    <ol>
                        <li>A little bit <Link to='/about'>about</Link> me and my story.</li>
                        <li>My developer <Link to='/portfolio'>portfolio</Link>, where I showcase what I've been learning</li>
                        <li>The ADHDecoded <Link to='/blog'>blog</Link>, where I discuss what it is like to live with ADHD, 
                        how to survive it, and how to thrive with it.</li>
                        <li>Ways you can get in <Link to='/contact'>contact</Link> with me.</li>
                    </ol>
            </main>
        </Layout>
    )
}

export default IndexPage