import React from 'react'
import My_section from '../components/My_section'
import My_div from '../components/My_div'
import H3 from '../components/H3'
import Sponsors from './Sponsors'

function Company() {
    return (
        <>
            <My_section section_id="company">
                <My_div DivCLass="container">
                    <My_div DivCLass="company_wrapper">
                        <My_div DivCLass="company_text">
                            <H3 h3text="Learn more about our company" />
                        </My_div>
                        <My_div DivCLass="company_img">
                            <My_div DivCLass="common_link">
                                <a href="#">LEARN MORE</a>
                            </My_div>
                        </My_div>
                    </My_div>
                </My_div>
            </My_section>
            <Sponsors />
        </>
    )
}

export default Company