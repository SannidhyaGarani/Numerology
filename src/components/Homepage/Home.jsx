
import Hero from './Hero'
import BrandTrust from './About'
import PromoBanner from './Banner'
import ScienceSection from './Science'
import BlueprintReport from './BlueprintReport'
import TestimonialSection from './Testemonials'
import Newsletter from './News'
import ProductGrid from './ProductGrid'

function Home() {
 

  return (
    <>
    
     <Hero/>
     <ProductGrid/>
     <ScienceSection/>
     <BlueprintReport />
     {/* <TestimonialSection/> */}
     <BrandTrust/>
     <PromoBanner/>
    </>
  )
}

export default Home
