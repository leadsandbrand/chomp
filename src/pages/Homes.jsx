import React from 'react'
import HeroPage from '../commponent/HeroPage'
import FeaturedProduct from '../commponent/FeaturedProducts'
import ProductAdvantages from '../commponent/ProductAdvantages'
import { Contact } from 'lucide-react'
import FAQPage from './FAQPage'
import Footer from '../commponent/Footer'

import Story from '../commponent/Story'
import Work from './Work'
import Testimonial from '../commponent/Testimonials'
import Howit from '../commponent/Howit'
const Homes = () => {
  return (
    <div>
        <HeroPage/>
        <ProductAdvantages/>
        <FeaturedProduct/>
    
       {/* <FAQPage/> */}
     <Story/>
    <Howit/>
   <Testimonial/>
       
           <Footer/>
       
    </div>
  )
}

export default Homes