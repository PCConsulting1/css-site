import Service from './ServiceCard.component'
import services from '../../data/services.data'

export default function Services() {
  return services.map((service) => (
    <Service
      key={service.title}
      title={service.title}
      description={service.description}
      bullets={service.bullets}
      price={service.price}
    />
  ))
}
