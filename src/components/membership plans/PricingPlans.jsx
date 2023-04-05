import ListContainer from '../ListContainer.component'
import Plan from './PlanCard.component'
import plans from '../../data/pricePlans.data'

export default function PricingPlans() {
  return (
    <ListContainer>
      {plans.map((plan) => (
        <Plan
          key={plan.title}
          title={plan.title}
          description={plan.description}
          bullets={plan.bullets}
          price={plan.price}
        />
      ))}
    </ListContainer>
  )
}
