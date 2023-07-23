import React, { Children } from 'react'

function My_p({p_class,p_id,p_text}) {
  return (
    <p className={p_class} id={p_id}>
        {p_text}
    </p>
  )
}

export default My_p