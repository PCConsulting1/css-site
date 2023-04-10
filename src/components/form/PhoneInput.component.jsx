import { Controller } from 'react-hook-form'
import PropTypes from 'prop-types'
import TextField from '@mui/material/TextField'

export default function PhoneInput({ name, control, label }) {
  function formatPhoneNumber(newValue) {
    const phoneNumber = newValue.replace(/[^\d]/g, '')
    const phoneNumberLength = phoneNumber.length

    if (phoneNumberLength < 4) {
      return phoneNumber
    }
    if (phoneNumberLength < 7) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`
    }
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
      3,
      6
    )}-${phoneNumber.slice(6, 10)}`
  }

  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      rules={{ minLength: { value: 10, message: 'Required Field' } }}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextField
          label={label}
          value={value}
          onChange={(e) => {
            onChange(formatPhoneNumber(e.target.value))
          }}
          error={!!error}
          helperText={error ? error.message : null}
          sx={{ width: 250 }}
        />
      )}
    />
  )
}
PhoneInput.propTypes = {
  name: PropTypes.string.isRequired,
  control: PropTypes.objectOf(PropTypes.any).isRequired,
  label: PropTypes.string.isRequired,
}
