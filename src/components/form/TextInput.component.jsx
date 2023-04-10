import TextField from '@mui/material/TextField'
import { Controller } from 'react-hook-form'
import PropTypes from 'prop-types'

export default function TextInput({ name, control, label }) {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      rules={{ required: 'Required Field' }}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextField
          label={label}
          variant="outlined"
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
}
