import { Controller } from 'react-hook-form'
import PropTypes from 'prop-types'
import TextField from '@mui/material/TextField'

export default function EmailInput({ name, control, label }) {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      rules={{
        required: 'Required Field',
        pattern: {
          value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/gi,
          message: 'Invalid Email',
        },
      }}
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
EmailInput.propTypes = {
  name: PropTypes.string.isRequired,
  control: PropTypes.objectOf(PropTypes.any).isRequired,
  label: PropTypes.string.isRequired,
}
