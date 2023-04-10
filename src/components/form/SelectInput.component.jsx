import FormHelperText from '@mui/material/FormHelperText'
import { Controller } from 'react-hook-form'
import PropTypes from 'prop-types'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import Box from '@mui/material/Box'

export default function SelectInput({ name, control, label, options }) {
  return (
    <Controller
      name={name}
      control={control}
      rules={{
        validate: (value) => value != null,
      }}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <Box sx={{ width: 250, padding: 0, margin: 0 }}>
          <Select
            variant="outlined"
            value={value || ''}
            displayEmpty
            onChange={onChange}
            error={!!error}
            sx={{ width: '100%' }}
          >
            <MenuItem value="" disabled>
              {label}
            </MenuItem>
            {options.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText sx={{ color: 'red', position: 'relative', left: 25 }}>
            {error ? 'Required Field' : null}
          </FormHelperText>
        </Box>
      )}
    />
  )
}
SelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  control: PropTypes.objectOf(PropTypes.any).isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
}
