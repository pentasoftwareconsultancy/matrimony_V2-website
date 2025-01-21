import React from 'react'
import Abouthero from '../../about/abouthero/Abouthero'
import Section from '../../about/abouthero/section/Section'
import Media from '../../about/media/Media'
import Aboutus from '../../about/aboutus/Aboutus'
import Gallary from '../../about/gallary/Gallary'
import Sectionmain from '../../about/sectionmain/Sectionmain'

function Aboutpages() {
  return (
    <div>
       <Abouthero/>
       <Section/>
       <Media/>
       <Aboutus/>
       <Gallary/>
       <Sectionmain/>
    </div>
  )
}

export default Aboutpages