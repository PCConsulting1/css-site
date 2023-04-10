import { Controller } from 'react-hook-form'
import PropTypes from 'prop-types'
import { MuiTelInput } from 'mui-tel-input'

/**
 * If phone number starts with 1-800 change formatting
 * Add parenthesis formatting as user types
 */

export default function TelephoneInput({ name, control, label }) {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      rules={{
        required: 'Required Field',
        maxLength: { value: 20, message: 'Invalid Phone Number' },
      }}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <MuiTelInput
          forceCallingCode
          disableDropdown
          value={value}
          onChange={onChange}
          error={!!error}
          helperText={error ? error.message : null}
          defaultCountry="US"
          label={label}
          style={{ width: 250 }}
        />
      )}
    />
  )
}
TelephoneInput.propTypes = {
  name: PropTypes.string.isRequired,
  control: PropTypes.objectOf(PropTypes.any).isRequired,
  label: PropTypes.string.isRequired,
}
