import React from 'react'

function H2({H2Class,H2ID,children,H2text}) {
  return (
    <h2 className={H2Class} id={H2ID}>
{H2text}{children}
    </h2>
  )
}

export default H2