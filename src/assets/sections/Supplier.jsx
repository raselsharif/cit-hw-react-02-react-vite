import React from 'react'
import My_section from '../components/My_section'
import My_div from '../components/My_div'
import My_p from '../components/My_p'
import H2 from '../components/H2'

function Supplier() {
    return (
        <My_section section_id="supplier">
            <My_div DivCLass="container">
                <My_div DivCLass="supplier_text">
                    <H2 H2text="The biggest supplier on the country"/>
                    <My_p p_text="It is a long established fact that a reader will be distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                        distribution."/>
                </My_div>
            </My_div>
        </My_section>
    )
}

export default Supplier