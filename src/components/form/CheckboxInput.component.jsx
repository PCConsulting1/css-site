import { Controller } from 'react-hook-form'
import PropTypes from 'prop-types'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'

export default function CheckboxInput({ name, control, label }) {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={false}
      render={({ field: { onChange, value } }) => (
        <FormControlLabel
          control={
            <Checkbox color="primary" checked={value} onChange={onChange} />
          }
          label={label}
        />
      )}
    />
  )
}
CheckboxInput.propTypes = {
  name: PropTypes.string.isRequired,
  control: PropTypes.objectOf(PropTypes.any).isRequired,
  label: PropTypes.string.isRequired,
}
