import React from 'react'

function H3({h3Class,h3ID,children,h3text}) {
  return (
    <h3 className={h3Class} id={h3ID}>
{children} {h3text}
    </h3>
  )
}

export default H3