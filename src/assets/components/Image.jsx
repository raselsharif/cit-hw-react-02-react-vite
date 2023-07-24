import React from 'react'

function Image({source,alternate}) {
  return (
    <img src={source} alt={alternate} />
  )
}

export default Image