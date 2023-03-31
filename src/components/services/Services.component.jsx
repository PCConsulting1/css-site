import Service from './ServiceCard.component'
import services from '../../data/services.data'

export default function Services() {
  return services.map((service) => (
    <Service
      key={service.title}
      icon={service.icon}
      title={service.title}
      description={service.description}
    />
  ))
}
