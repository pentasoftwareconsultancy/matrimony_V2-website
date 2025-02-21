import React from 'react'
import Hero from '../../Components/homes/hero/Hero'
import Featurees from '../../Components/homes/featurees/Featurees'
import ProfileSteps from '../../Components/homes/profilestep/Profilestep'
import Profilesteps from '../../Components/homes/profilestep/Profilestep'
import Filter from '../../Components/homes/filter/Filter'
import Homeabout from '../../Components/homes/homeabout/Homeabout'
// import Hero from '../../homes/home/hero/Hero'
// import Filter from '../../homes/home/hero/filter/Filter'

function Homepages() {
  return (
    <div>
     <Hero/>
   {/* <Filter/> */}
      <Featurees/>
      <Homeabout/>
      <Profilesteps/>
    </div>
  )
}

export default Homepages