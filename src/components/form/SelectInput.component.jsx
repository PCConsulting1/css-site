import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import FormHelperText from '@mui/material/FormHelperText'
import { Controller } from 'react-hook-form'
import PropTypes from 'prop-types'

export default function SelectInput({ name, control, options }) {
  return (
    <Controller
      name={name}
      control={control}
      rules={{
        validate: (value) => value != null,
      }}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <>
          <Select
            variant="outlined"
            value={value || ''}
            displayEmpty
            onChange={onChange}
            error={!!error}
            sx={{ margin: 1, width: 225 }}
          >
            <MenuItem value="" disabled>
              CitizenShip Status
            </MenuItem>
            {options.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText sx={{ color: 'red' }}>
            {error ? 'Required Field' : null}
          </FormHelperText>
        </>
      )}
    />
  )
}
SelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  control: PropTypes.objectOf(PropTypes.any).isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
}
