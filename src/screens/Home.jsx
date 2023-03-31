/*
Prices/Plans component
Testimonial component 
Brief overview component
*/
import PricingPlans from '../components/membership plans/PricingPlans'
import Services from '../components/services/Services.component'
import ListContainer from '../components/ListContainer.component'

function Home() {
  return (
    <>
      <h1>Home Page</h1>
      <ListContainer>
        <PricingPlans />
      </ListContainer>
      <ListContainer>
        <Services />
      </ListContainer>
    </>
  )
}

export default Home
