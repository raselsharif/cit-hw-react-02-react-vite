import React from 'react'


function My_section({children,section_class,section_id}) {
  return (
    <section className={section_class} id={section_id}>
        {children}
    </section>
  )
}

export default My_section