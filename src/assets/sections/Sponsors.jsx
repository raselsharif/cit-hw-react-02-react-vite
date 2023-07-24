import React from 'react'
import My_div from '../components/My_div'
import My_section from '../components/My_section'
import Image from '../components/Image'

function Sponsors() {
    return (
        <My_section section_id="sponsor">
            <My_div DivCLass="container">
                <My_div DivCLass="sponsor_wrapper">
                    <My_div DivCLass="sponsor_logo">
                        <Image source="Logo1.png" alternate="logo" />
                    </My_div>
                    <My_div DivCLass="sponsor_logo">
                        <Image source="Logo2.png" alternate="logo" />
                    </My_div>
                    <My_div DivCLass="sponsor_logo">
                        <Image source="Logo3.png" alternate="logo" />
                    </My_div>
                    <My_div DivCLass="sponsor_logo">
                        <Image source="Logo4.png" alternate="logo" />
                    </My_div>
                </My_div>
            </My_div>
        </My_section>
    )
}

export default Sponsors