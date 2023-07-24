import React from 'react'
import My_section from '../components/My_section'
import My_div from '../components/My_div'
import H3 from '../components/H3'

function Branches() {
    return (
        <My_section section_id="branch">
            <My_div DivCLass="container">
                <My_div DivCLass="branch_wrapper">
                    <My_div DivCLass="branch_text">
                        <H3 h3text="Want to join as member branch in your area?" />
                    </My_div>
                    <My_div DivCLass="menu_link">
                        <a href="#">contact</a>
                    </My_div>
                </My_div>
            </My_div>
        </My_section>
    )
}

export default Branches