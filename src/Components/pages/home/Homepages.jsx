import React from 'react'
import Hero from '../../homes/hero/Hero'
import Featurees from '../../homes/featurees/Featurees'
import ProfileSteps from '../../homes/profilestep/Profilestep'
import Profilesteps from '../../homes/profilestep/Profilestep'
import Filter from '../../homes/filter/Filter'
import Homeabout from '../../homes/homeabout/Homeabout'
// import Hero from '../../homes/home/hero/Hero'
// import Filter from '../../homes/home/hero/filter/Filter'

function Homepages() {
  return (
    <div>
     <Hero/>
   <Filter/>
      <Featurees/>
      <Homeabout/>
      <Profilesteps/>
    </div>
  )
}

export default Homepages