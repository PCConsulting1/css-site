import TextField from '@mui/material/TextField'
import { Controller } from 'react-hook-form'
import PropTypes from 'prop-types'

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
          variant="outlined"
          value={value}
          onChange={onChange}
          error={!!error}
          helperText={error ? error.message : null}
          sx={{ margin: 1 }}
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
