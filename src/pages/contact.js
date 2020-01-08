import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import Head from '../components/Head'

const ContactPage = () => {
    return (
        <Layout>
            <Head title="Contact" />
            <h2>Contact</h2>
            <div>Email: <a href='mailto:boutchersj@gmail.com'>boutchersj@gmail.com</a></div>
            <div>Twitter: <a href='https://twitter.com/boutchersj'>@boutchersj</a></div>
            <Link to='/'>Back Home</Link>
        </Layout>
    )
}

export default ContactPage