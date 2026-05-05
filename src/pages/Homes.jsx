import React from 'react'
import HeroPage from '../commponent/Heropage'
import FeaturedProduct from '../commponent/FeaturedProducts'
import ProductAdvantages from '../commponent/ProductAdvantages'
import { Contact } from 'lucide-react'
import FAQPage from './FAQPage'
import Footer from '../commponent/Footer'
import DetailProduct from './DetailProduct'
import Story from '../commponent/Story'
import Work from './Work'
import Testimonial from '../commponent/Testimonials'
const Homes = () => {
  return (
    <div>
        <HeroPage/>
        <ProductAdvantages/>
        <FeaturedProduct/>
    
       {/* <FAQPage/> */}
     <Story/>
    
   <Testimonial/>
       {/* <DetailProduct/> */}
           <Footer/>
       
    </div>
  )
}

export default Homes