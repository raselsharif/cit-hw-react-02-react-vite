import React from 'react'

function My_div({ DivCLass, DivID, children }) {
  return (
    <div className={DivCLass} id={DivID}>
      {children}
    </div>
  )
}

export default My_div