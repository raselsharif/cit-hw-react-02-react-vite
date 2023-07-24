import React from 'react'

function My_anchor(My_link,link_text) {
  return (
    <a href={My_link}>
        {link_text} {children}
    </a>
  )
}

export default My_anchor