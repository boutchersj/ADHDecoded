import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import Head from '../components/Head'

const AboutPage = () => {
    return (
        <Layout>
            <Head title="About" />
            <h2>About</h2>
            <p>
                I grew up in Burlington, a small town in southeast Wisconsin, and definitely <em>not</em> the one with the 
                coat factory. At 5, I was diagnosed with ADHD, and this changed the way I saw the world. My first real hobby 
                came about when my parents signed me up for orchestra in the 4th grade. I played the violin all the way through high school 
                and this was something that really sparked my interest in creative pursuits.</p>
            <p>
                I ended up wanting to study Spanish in college and keep violin as a hobby. After all, I mostly played because it was a 
                great form of musical therapy, not because I wanted it to be my life. Spanish took me pretty far, and in September 2016, I went to Spain for 3 months 
                on a study abroad experience through UW-Whitewater. While I also enjoyed speaking Spanish and traveling, I found myself in yet 
                another dead end in terms of what career I wanted to pursue. I was left in a bit of a pickle, with graduation only a year or so away.
            </p>
            <p>In May 2017, my finances took a turn, and I needed to take a year off from college to be able to finance my last semester. I was realizing 
                quickly that if I didn't decide on a new career path, I'd be going into the education field, which I had already discovered was not a good fit 
                for me, but I wasn't really going to be qualified to do anything else based on my formal education. I was also dangerously close to having to pay 
                double tuition because of the amount of course credits I had racked up. The pressure was mounting to figure out an 
                alternative that didn't require me to stay in college even longer.
            </p>
            <p>
                Eventually, while picking through my past for some clue of what career I should choose, I remembered a programming class I took in my sophomore 
                year. I figured it could be a good starting point, since there was the possibility of not having to change majors if I learned to code on my own. So 
                that's what I did. I tried out Python, and <em>that</em> was confusing. Then I found a free learning platform for people new to web development. It was 
                called <a href='https://freecodecamp.org'>freeCodeCamp</a>, and this is where my journey <em>really</em> began.
            </p>
            <p>
                In December 2017, I decided to start the freeCodeCamp curriculum, and I haven't stopped learning since. I took a couple of breaks to work multiple jobs and 
                finish up my Spanish Education degree, but I never stopped wanting to learn. When I finished college a year later, I had learned enough HTML, CSS, and JavaScript to earn 
                the first 2 certifications on the platform, and I was starting to learn the React.js library. Things were looking good. I was still working customer service, but I was happy. 
                I had finished my last college course, I was paying my own bills, and I had hope that as long as I continued to learn, I would eventually be able to 
                leave customer service for greener pastures in the tech industry.
            </p>
            <p>
                Since that fateful exit from formal education, and my turn away from the education field, I have been inspired to give back somehow. That inspiration took the shape of my ADHDecoded self-help 
                brand, which I hope will help people with ADHD who are struggling to find joy and strength in their lives. I also want to use it as a platform to create an intersectional dialogue about ADHD in the tech community, 
                and the unique challenges and opportunities in this space.
            </p>
        </Layout>
    )
}

export default AboutPage