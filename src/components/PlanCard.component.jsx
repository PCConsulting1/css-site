import PropTypes from 'prop-types'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import CheckIcon from '@mui/icons-material/Check'

export default function Plan({ title, description, bullets, price }) {
  return (
    <Card elevation={10} sx={{ width: 275, margin: 1, padding: 1 }}>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {title}
        </Typography>
        <Typography variant="body1" color="text.secondary" component="p">
          {description}
        </Typography>
      </CardContent>
      <List>
        {bullets.map((bullet) => (
          <ListItem key={bullet} disablePadding>
            <ListItemIcon>
              <CheckIcon sx={{ color: 'primary.dark' }} />
            </ListItemIcon>
            <ListItemText primary={bullet} />
          </ListItem>
        ))}
      </List>
      <Typography variant="body2" color="text.secondary">
        starting at
      </Typography>
      <Typography variant="h5" color="text.primary">
        {price}
      </Typography>
      <CardActions>
        <Button size="small" color="primary" variant="contained">
          Get Started
        </Button>
      </CardActions>
    </Card>
  )
}
Plan.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  bullets: PropTypes.arrayOf(PropTypes.string),
  price: PropTypes.string.isRequired,
}
Plan.defaultProps = {
  bullets: [],
}
