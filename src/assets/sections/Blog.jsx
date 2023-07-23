import React from 'react'

function Blog() {
  return (
    <section id="blog">
    <div class="container">
        <div class="blog_wrapper">
            <div class="blog_items">
                <div class="blog_img">
                    <img src="blog1.jpg" alt="blog image" />
                    <div class="blog_overlay">
                        <p>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</p>
                        <div class="common_link">
                            <a href="#">LEARN MORE</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="blog_items">
                <div class="blog_img">
                    <img src="blog2.jpg" alt="blog image" />
                    <div class="blog_overlay">
                        <p>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</p>
                        <div class="common_link">
                            <a href="#">LEARN MORE</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="blog_items">
                <div class="blog_img">
                    <img src="blog3.jpg" alt="blog image" />
                    <div class="blog_overlay">
                        <p>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</p>
                        <div class="common_link">
                            <a href="#">LEARN MORE</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="blog_more">
            <a href="#">MORE FROM THE BLLOG <i class="fa-solid fa-chevron-right"></i></a>
        </div>
    </div>
</section>
  )
}

export default Blog