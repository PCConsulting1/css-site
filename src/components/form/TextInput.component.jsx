import { Controller } from 'react-hook-form'
import PropTypes from 'prop-types'
import TextField from '@mui/material/TextField'

export default function TextInput({ name, control, label, isRequired }) {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      rules={{ required: { value: isRequired, message: 'Required Field' } }}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextField
          label={label}
          value={value}
          onChange={onChange}
          error={!!error}
          helperText={error ? error.message : null}
          sx={{ width: 250 }}
        />
      )}
    />
  )
}
TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  control: PropTypes.objectOf(PropTypes.any).isRequired,
  label: PropTypes.string.isRequired,
  isRequired: PropTypes.bool,
}
TextInput.defaultProps = {
  isRequired: true,
}
