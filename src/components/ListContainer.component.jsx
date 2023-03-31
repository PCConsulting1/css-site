import PropTypes from 'prop-types'
import Container from '@mui/material/Container'

export default function ListContainer({ children }) {
  return (
    <Container
      sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly' }}
    >
      {children}
    </Container>
  )
}
ListContainer.propTypes = {
  children: PropTypes.node.isRequired,
}
