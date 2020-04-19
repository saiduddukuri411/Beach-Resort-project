import React from 'react'
import Hero from '../Components/Hero'
import Banner from '../Components/Banner'
import {Link} from 'react-router-dom';
export default function Errorpage() {
    return (
        <Hero >
            <Banner title="404" subtitle="Page Not Found">
               <Link to='/' className="btn-primary">
                   Return Home
                </Link>
            </Banner>
        </Hero>
    )
}
