import { Controller } from 'react-hook-form'
import PropTypes from 'prop-types'
import { DateField } from '@mui/x-date-pickers/DateField'

export default function DateInput({ name, control, label }) {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      rules={{ required: 'Required Field' }}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <DateField
          value={value}
          onChange={onChange}
          error={!!error}
          helperText={error ? error.message : null}
          label={label}
          style={{ width: 250 }}
        />
      )}
    />
  )
}
DateInput.propTypes = {
  name: PropTypes.string.isRequired,
  control: PropTypes.objectOf(PropTypes.any).isRequired,
  label: PropTypes.string.isRequired,
}
