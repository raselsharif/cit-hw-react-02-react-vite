import React from 'react'


function My_section({Children,section_class,section_id}) {
  return (
    <section className={section_class} id={section_id}>
        {Children}
    </section>
  )
}

export default My_section