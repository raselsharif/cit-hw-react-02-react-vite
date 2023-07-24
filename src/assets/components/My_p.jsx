import React from 'react'

function My_p({p_class,p_id,p_text,children}) {
  return (
    <p className={p_class} id={p_id}>
      {p_text} {children}        
    </p>
  )
}

export default My_p