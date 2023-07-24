import React from 'react'
import My_section from '../components/My_section'
import Branches from './Branches'

function Map() {
    return (
        <>
        <My_section section_id="map">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233668.38703900264!2d90.27919458030634!3d23.780573256880906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1680672844076!5m2!1sen!2sbd" width="100%" height="100%"  ></iframe>
        </My_section>
        <Branches/>
        </>
    )
}

export default Map