import Container from '@mui/material/Container'

import Plan from './PlanCard.component'
import plans from '../../data/pricePlans.data'

export default function PricingPlans() {
  return (
    <Container
      sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly' }}
    >
      {plans.map((plan) => (
        <Plan
          key={plan.title}
          title={plan.title}
          description={plan.description}
          bullets={plan.bullets}
          price={plan.price}
        />
      ))}
    </Container>
  )
}
