import React from 'react'
import My_section from '../components/My_section'
import My_div from '../components/My_div'
import H3 from '../components/H3'
import My_anchor from '../components/My_anchor'

function Banner() {
  return (
    <My_section section_id="banner">
      <My_div DivCLass="container">
        <My_div DivCLass="banner_text">
          <H3 h3text="We exist since 1975 on the oil and gas industry."/>
        </My_div>
        <My_div DivCLass="common_link">
          <a href="#">Know More</a>
          {/* <My_anchor My_link="#" link_text="hello"/> */}
        </My_div>
      </My_div>
    </My_section>
  )
}

export default Banner