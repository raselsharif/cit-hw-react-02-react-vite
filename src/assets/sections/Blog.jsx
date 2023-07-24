import React from 'react'
import My_section from '../components/My_section'
import My_div from '../components/My_div'
import My_p from '../components/My_p'

function Blog() {
  return (
    <My_section section_id="blog">
    <My_div DivCLass="container">
        <My_div DivCLass="blog_wrapper">
            <My_div DivCLass="blog_items">
                <My_div DivCLass="blog_img">
                    <img src="blog1.jpg" alt="blog image" />
                    <My_div DivCLass="blog_overlay">
                        <My_p p_text="lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod."/>
                        <My_div DivCLass="common_link">
                            <a href="#">LEARN MORE</a>
                        </My_div>
                    </My_div>
                </My_div>
            </My_div>
            <My_div DivCLass="blog_items">
                <My_div DivCLass="blog_img">
                    <img src="blog2.jpg" alt="blog image" />
                    <My_div DivCLass="blog_overlay">
                    <My_p p_text="lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod."/>
                        <My_div DivCLass="common_link">
                            <a href="#">LEARN MORE</a>
                        </My_div>
                    </My_div>
                </My_div>
            </My_div>
            <My_div DivCLass="blog_items">
                <My_div DivCLass="blog_img">
                    <img src="blog3.jpg" alt="blog image" />
                    <My_div DivCLass="blog_overlay">
                    <My_p p_text="lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod."/>
                        <My_div DivCLass="common_link">
                            <a href="#">LEARN MORE</a>
                        </My_div>
                    </My_div>
                </My_div>
            </My_div>
        </My_div>
        <My_div DivCLass="blog_more">
            <a href="#">MORE FROM THE BLLOG <i className="fa-solid fa-chevron-right"></i></a>
        </My_div>
    </My_div>
</My_section>
  )
}

export default Blog