import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

import Service from './ServiceCard.component'
import services from '../../data/services.data'

export default function Services() {
  return (
    <>
      <Box
        sx={{
          width: '100%',
          paddingTop: 20,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Typography variant="h2" component="div" gutterBottom>
          Services
        </Typography>
      </Box>
      {services.map((service) => (
        <Service
          key={service.title}
          icon={service.icon}
          title={service.title}
          description={service.description}
        />
      ))}
    </>
  )
}
