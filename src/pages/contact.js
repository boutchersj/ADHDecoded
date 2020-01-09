import React from 'react'
import Layout from '../components/Layout'
import Head from '../components/Head'
import contactStyles from './contact.module.scss'

const ContactPage = () => {
    
    return (
        <Layout>
            <Head title="Contact" />
            <h2>Contact</h2>
            <div className={contactStyles.buttons}>
                <a href='mailto:boutchersj@gmail.com'>Email</a>
                <a target='_blank' href='https://twitter.com/boutchersj'>Twitter</a>
                <a target='_blank' href='https://linkedin.com/in/boutchersj'>LinkedIn</a>
            </div>
        </Layout>
    )
}

export default ContactPage