/*
Prices/Plans component
Testimonial component 
Brief overview component
*/
import PricingPlans from '../components/membership plans/PricingPlans'
import Services from '../components/services/Services.component'
import WelcomeBanner from '../components/Welcome.component'

function Home() {
  return (
    <>
      <WelcomeBanner />
      <PricingPlans />
      <Services />
    </>
  )
}

export default Home
