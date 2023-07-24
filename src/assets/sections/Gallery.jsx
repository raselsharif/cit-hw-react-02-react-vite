import React from 'react'
import Supplier from './Supplier'
import My_section from '../components/My_section'
import My_div from '../components/My_div'
import Image from '../components/Image'

function Gallery() {
    return (
        <>
            <Supplier />
            <My_section section_id="gallery">
                <My_div DivCLass="gallery_wrapper">
                    <My_div DivCLass="gallery_img">
                        <Image source="gal01.jpg" alternate="gallery images" />
                    </My_div>
                    <My_div DivCLass="gallery_img">
                        <Image source="gal02.jpg" alternate="gallery images" />
                    </My_div>
                    <My_div DivCLass="gallery_img">
                        <Image source="gal03.jpg" alternate="gallery images" />
                    </My_div>
                    <My_div DivCLass="gallery_img">
                        <Image source="gal04.jpg" alternate="gallery images" />
                    </My_div>
                </My_div>
            </My_section>
        </>
    )
}

export default Gallery