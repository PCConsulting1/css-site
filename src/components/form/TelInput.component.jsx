import { Controller } from 'react-hook-form'
import PropTypes from 'prop-types'
import { MuiTelInput } from 'mui-tel-input'

export default function TelephoneInput({ name, control, label }) {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      rules={{
        required: 'Required Field',
        maxLength: { value: 10, message: 'Invalid Phone Number' },
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
