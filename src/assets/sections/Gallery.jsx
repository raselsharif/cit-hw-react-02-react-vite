import React from 'react'
import Supplier from './Supplier'

function Gallery() {
  return (
    <>
    <Supplier/>
    <section id="gallery">
    <div class="gallery_wrapper">
        <div class="gallery_img">
            <img src="gal01.jpg" alt="gallery images" />
        </div>
        <div class="gallery_img">
            <img src="gal02.jpg" alt="gallery images" />
        </div>
        <div class="gallery_img">
            <img src="gal03.jpg" alt="gallery images" />
        </div>
        <div class="gallery_img">
            <img src="gal04.jpg" alt="gallery images" />
        </div>
    </div>
</section>
    </>
  )
}

export default Gallery