import React from 'react'
import My_section from '../components/My_section'
import My_div from '../components/My_div'
import H2 from '../components/H2'
import H3 from '../components/H3'
import My_p from '../components/My_p'

function Service() {
  return (
    <My_section id="service">
        <My_div DivCLass="service_wrapper">
            <My_div DivCLass="service_main">
                <My_div DivCLass="service_text">
                    <H2 H2text="Our Services"/>
                    <My_p p_text="It is a long established fact that a reader will be distracted by the readable content of a page
                        when looking at its layout."/>
                </My_div>
                <My_div DivCLass="service_img service_img_one">
                    <H3 h3text="Modern natural oil and gas refineries."/>
                    <My_div DivCLass="common_link">
                        <a href="#">LEARN MORE</a>
                    </My_div>
                </My_div>
                <My_div DivCLass="service_img service_img_two">
                <H3 h3text="Modern natural oil and gas refineries."/>
                    <h3></h3>
                    <My_div DivCLass="common_link">
                        <a href="#">LEARN MORE</a>
                    </My_div>
                </My_div>
                <My_div DivCLass="service_img service_img_three">
                <H3 h3text="Modern natural oil and gas refineries."/>
                    <My_div DivCLass="common_link">
                        <a href="#">LEARN MORE</a>
                    </My_div>
                </My_div>
            </My_div>
        </My_div>
    </My_section>
  )
}

export default Service